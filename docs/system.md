# Product Requirements Document (PRD)

## Premium Automotive Brokerage Platform

---

**Project:** Premium Automotive Brokerage Platform  
**Prepared by:** GTSS – Great Thumbs Software Solutions  
**Version:** 1.0  
**Status:** Pre-Development  
**Last Updated:** 2026-05-07  
**Classification:** Internal – Developer Reference

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Architecture](#2-tech-stack--architecture)
3. [System Architecture Overview](#3-system-architecture-overview)
4. [Database Schema Requirements](#4-database-schema-requirements)
5. [Authentication & Authorization](#5-authentication--authorization)
6. [Client-Side Pages & Requirements](#6-client-side-pages--requirements)
7. [Admin-Side Pages & Requirements](#7-admin-side-pages--requirements)
8. [Component Inventory](#8-component-inventory)
9. [Core Feature Specifications](#9-core-feature-specifications)
10. [API Routes & Endpoints](#10-api-routes--endpoints)
11. [Third-Party Integrations](#11-third-party-integrations)
12. [SEO & Structured Data Requirements](#12-seo--structured-data-requirements)
13. [Payment Architecture](#13-payment-architecture)
14. [Real-Time Requirements](#14-real-time-requirements)
15. [Performance Requirements](#15-performance-requirements)
16. [Security Requirements](#16-security-requirements)
17. [Compliance Requirements](#17-compliance-requirements)
18. [Non-Functional Requirements](#18-non-functional-requirements)
19. [Environment & Deployment](#19-environment--deployment)
20. [Developer Conventions](#20-developer-conventions)

---

## 1. Project Overview

### 1.1 Background

A premium automotive brokerage dealing in brand-new, high-value vehicles requires an enterprise-grade digital platform that operates as a transaction catalyst — not a static brochure. The business model is **hybrid**: customers discover, evaluate, and place a reservation deposit online, then complete the final physical transaction and vehicle handover in person at the brokerage.

### 1.2 Business Goals

- Capture high-intent automotive leads 24/7 with minimal friction
- Allow customers to securely reserve a vehicle online with a deposit hold
- Provide an immersive visual experience (360° tours, live video, hotspots) that replaces the need for an initial physical visit
- Automate inventory management, lead distribution, accounting sync, and commission calculation
- Dominate local and national search engine results for automotive keywords
- Maintain full regulatory compliance (GDPR, CCPA, PCI DSS, FTC)

### 1.3 User Roles

| Role                 | Description                                     |
| -------------------- | ----------------------------------------------- |
| `PUBLIC`             | Anonymous website visitor                       |
| `CUSTOMER`           | Registered buyer with an account                |
| `SALESPERSON`        | Brokerage sales representative                  |
| `INVENTORY_MANAGER`  | Manages vehicle listings and media              |
| `FINANCE_CONTROLLER` | Access to accounting, payments, and commissions |
| `MARKETING_MANAGER`  | Manages SEO, feeds, and marketing settings      |
| `ADMIN`              | Full system access                              |
| `SUPER_ADMIN`        | Root-level access including role assignment     |

### 1.4 Scope

The platform comprises:

- A public-facing customer website (Next.js, SSR/SSG)
- An administration dashboard (Next.js, CSR with role-based guards)
- A RESTful API layer (Next.js API Routes)
- A real-time event layer (Socket.IO on a separate Node.js server)
- A PostgreSQL database managed via Prisma ORM
- A suite of third-party integrations (Stripe, Xero, VIN APIs, 360 tour platforms, WhatsApp API, AI description generation)

---

## 2. Tech Stack & Architecture

### 2.1 Core Stack

| Layer            | Technology                                             | Rationale                                           |
| ---------------- | ------------------------------------------------------ | --------------------------------------------------- |
| Framework        | Next.js 14+ (App Router)                               | SSR, SSG, ISR for SEO; API routes for backend logic |
| Language         | TypeScript (strict mode)                               | Type safety across all layers                       |
| Database         | PostgreSQL                                             | Relational integrity for complex financial data     |
| ORM              | Prisma v5+                                             | Type-safe queries, migrations, schema management    |
| Auth             | NextAuth.js v5 (Auth.js)                               | Session management, OAuth, credential-based login   |
| Payments         | Stripe                                                 | PCI DSS compliant, authorize/capture workflow       |
| Real-Time        | Socket.IO (separate Node.js server)                    | Live inventory updates, chat, notifications         |
| Styling          | Tailwind CSS + shadcn/ui                               | Utility-first, consistent design system             |
| State Management | Zustand (client state) + TanStack Query (server state) | Minimal boilerplate, efficient cache                |
| File Uploads     | Uploadthing / Cloudflare R2                            | Vehicle media (photos, videos)                      |
| Email            | Resend + React Email                                   | Transactional emails                                |
| SMS              | Africa's Talking / Twilio                              | SMS follow-ups and alerts                           |
| Validation       | Zod                                                    | Schema validation on client and server              |
| Forms            | React Hook Form + Zod resolver                         | Performant, validated forms                         |
| Testing          | Vitest + Playwright                                    | Unit, integration, and E2E tests                    |
| Linting          | ESLint + Prettier                                      | Code quality enforcement                            |

### 2.2 Monorepo Structure

```
/
├── apps/
│   ├── web/                  # Next.js main application (public + admin)
│   └── socket-server/        # Socket.IO real-time server
├── packages/
│   ├── database/             # Prisma schema, client, migrations
│   ├── types/                # Shared TypeScript types
│   ├── validators/           # Shared Zod schemas
│   └── utils/                # Shared utilities (formatters, helpers)
├── .env.local
├── turbo.json
└── package.json
```

### 2.3 Next.js App Router Structure

```
apps/web/
├── app/
│   ├── (public)/             # Public-facing routes
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Homepage
│   │   ├── inventory/
│   │   ├── locations/
│   │   ├── reserve/
│   │   ├── account/
│   │   └── ...
│   ├── (admin)/              # Admin dashboard routes
│   │   ├── layout.tsx
│   │   ├── admin/
│   │   └── ...
│   ├── api/                  # API route handlers
│   └── layout.tsx            # Root layout
├── components/
│   ├── public/               # Public-facing components
│   ├── admin/                # Admin-specific components
│   └── ui/                   # Shared primitive components
├── lib/                      # Utilities, helpers, API clients
├── hooks/                    # Custom React hooks
├── stores/                   # Zustand stores
├── types/                    # Local TypeScript types
└── middleware.ts              # Auth and route protection middleware
```

---

## 3. System Architecture Overview

### 3.1 Request Flow

```
Browser → CDN (Cloudflare) → Next.js Server
                                   ↓
                          API Routes / Server Actions
                                   ↓
                     Prisma ORM → PostgreSQL Database
                                   ↓
                     Third-Party APIs (Stripe, Xero, VIN, etc.)

Browser ←→ Socket.IO Server (Node.js) — Real-time channel
```

### 3.2 Rendering Strategy Per Page Type

| Page Type              | Strategy               | Reason                                  |
| ---------------------- | ---------------------- | --------------------------------------- |
| Homepage               | ISR (revalidate: 3600) | SEO + freshness                         |
| Inventory listing      | SSR                    | Dynamic filters, real-time availability |
| Vehicle Detail Page    | SSR + ISR              | SEO critical, must show live status     |
| Admin dashboard        | CSR                    | No SEO needed, real-time data           |
| Location landing pages | SSG + ISR              | SEO, infrequently changing              |
| Account pages          | SSR (auth-gated)       | User-specific data                      |

### 3.3 Caching Strategy

- Vehicle listings: Redis or Next.js fetch cache with on-demand revalidation on inventory change
- VIN decoding results: Cache per VIN in database to avoid repeat API calls
- Static assets (images, videos): CDN with long TTL
- Admin data: No caching — always fresh

---

## 4. Database Schema Requirements

### 4.1 Core Models

#### `Vehicle`

```
id                  String        @id @default(cuid())
vin                 String        @unique
slug                String        @unique          // URL-friendly identifier
make                String
model               String
year                Int
trim                String?
bodyType            String?
condition           VehicleCondition  // NEW | USED
status              VehicleStatus     // AVAILABLE | RESERVED | SOLD | ARCHIVED | DRAFT
publishedAt         DateTime?
price               Decimal       @db.Decimal(12, 2)
purchaseCost        Decimal       @db.Decimal(12, 2)  // Internal only
currency            String        @default("USD")
mileage             Int
fuelType            String?
transmission        String?
drivetrain          String?
engineSize          String?
engineCylinders     Int?
horsepower          Int?
torque              Int?
color               String?
interiorColor       String?
doors               Int?
seats               Int?
weightKg            Decimal?
lengthMm            Int?
widthMm             Int?
heightMm            Int?
fuelConsumptionL    Decimal?
co2EmissionsG       Int?
accelerationSec     Decimal?
topSpeedKmh         Int?
safetyRating        String?
knownDamages        String?
description         String?       @db.Text    // AI-generated
features            String[]                  // Array of feature strings
reconditioningCost  Decimal?      @db.Decimal(10, 2)
floorplanInterest   Decimal?      @db.Decimal(10, 2)
vatMarginEligible   Boolean       @default(false)
locationId          String?
assignedBrokerId    String?
viewCount           Int           @default(0)
enquiryCount        Int           @default(0)
createdAt           DateTime      @default(now())
updatedAt           DateTime      @updatedAt

// Relations
media               VehicleMedia[]
reservations        Reservation[]
leads               Lead[]
deal                Deal?
analytics           VehicleAnalytics?
```

#### `VehicleMedia`

```
id          String      @id @default(cuid())
vehicleId   String
type        MediaType   // PHOTO | VIDEO | TOUR_360 | BROCHURE
url         String
cdnUrl      String?
order       Int         @default(0)
isHero      Boolean     @default(false)
caption     String?
createdAt   DateTime    @default(now())
```

#### `Lead`

```
id              String      @id @default(cuid())
vehicleId       String?
customerId      String?
assignedToId    String?     // Staff member
source          LeadSource  // WEBSITE | WHATSAPP | GOOGLE | WALK_IN | REFERRAL | PHONE
status          LeadStatus  // NEW | CONTACTED | QUALIFIED | NEGOTIATING | LOST | CONVERTED
firstName       String
lastName        String
email           String
phone           String
message         String?     @db.Text
tradeInInterest Boolean     @default(false)
financeInterest Boolean     @default(false)
contactedAt     DateTime?
firstResponseMs Int?        // Response time in ms for SLA tracking
escalatedAt     DateTime?
escalatedToId   String?
convertedAt     DateTime?
lostReason      String?
createdAt       DateTime    @default(now())
updatedAt       DateTime    @updatedAt

// Relations
vehicle         Vehicle?
customer        Customer?
assignedTo      Staff?
notes           LeadNote[]
communications  Communication[]
```

#### `Reservation`

```
id                  String              @id @default(cuid())
vehicleId           String
customerId          String
leadId              String?
status              ReservationStatus   // PENDING | ACTIVE | COMPLETED | CANCELLED | EXPIRED
depositAmount       Decimal             @db.Decimal(10, 2)
depositCurrency     String              @default("USD")
stripePaymentIntentId  String          @unique
stripeChargeId      String?
authorisedAt        DateTime?
capturedAt          DateTime?
releasedAt          DateTime?
expiresAt           DateTime?           // Authorization expiry (7 days default)
offlinePaymentMethod OfflinePaymentMethod?  // WIRE | CASH | CHEQUE | POS
offlinePaymentAmount Decimal?           @db.Decimal(12, 2)
offlinePaymentDate   DateTime?
offlinePaymentRef    String?
totalSettlementAmount Decimal?          @db.Decimal(12, 2)
notes               String?             @db.Text
contractUrl         String?             // Uploaded signed contract
createdAt           DateTime            @default(now())
updatedAt           DateTime            @updatedAt

// Relations
vehicle             Vehicle
customer            Customer
deal                Deal?
```

#### `Deal`

```
id                  String      @id @default(cuid())
vehicleId           String      @unique
reservationId       String?     @unique
customerId          String
salespersonId       String
status              DealStatus  // OPEN | INSPECTION | CLOSED | LOST
salePrice           Decimal     @db.Decimal(12, 2)
purchaseCost        Decimal     @db.Decimal(12, 2)
reconditioningCost  Decimal     @default(0) @db.Decimal(10, 2)
floorplanInterest   Decimal     @default(0) @db.Decimal(10, 2)
otherCosts          Decimal     @default(0) @db.Decimal(10, 2)
grossProfit         Decimal     @db.Decimal(12, 2)    // Computed
vatDue              Decimal?    @db.Decimal(10, 2)    // Margin scheme
tradeInId           String?
financeReserve      Decimal?    @db.Decimal(10, 2)
docFees             Decimal?    @db.Decimal(8, 2)
closedAt            DateTime?
accountingSyncId    String?     // Xero/QB transaction ID
createdAt           DateTime    @default(now())
updatedAt           DateTime    @updatedAt

// Relations
commissions         Commission[]
```

#### `Customer`

```
id              String      @id @default(cuid())
userId          String?     @unique   // Links to NextAuth User if registered
firstName       String
lastName        String
email           String      @unique
phone           String?
address         String?
city            String?
country         String?
idDocumentRef   String?     // Encrypted reference, not raw data
consentGiven    Boolean     @default(false)
consentDate     DateTime?
marketingOptIn  Boolean     @default(false)
deletedAt       DateTime?   // Soft delete for GDPR
createdAt       DateTime    @default(now())
updatedAt       DateTime    @updatedAt
```

#### `Staff`

```
id              String      @id @default(cuid())
userId          String      @unique
firstName       String
lastName        String
email           String      @unique
phone           String?
role            StaffRole
commissionPlanId String?
isActive        Boolean     @default(true)
createdAt       DateTime    @default(now())
updatedAt       DateTime    @updatedAt

// Relations
commissionPlan  CommissionPlan?
commissions     Commission[]
leads           Lead[]
```

#### `Commission`

```
id              String              @id @default(cuid())
dealId          String
staffId         String
planId          String
grossProfit     Decimal             @db.Decimal(12, 2)
rate            Decimal             @db.Decimal(5, 4)   // e.g. 0.0500 = 5%
flatFee         Decimal?            @db.Decimal(10, 2)
amount          Decimal             @db.Decimal(10, 2)  // Final payout
status          CommissionStatus    // PENDING | APPROVED | PAID
payRunId        String?
createdAt       DateTime            @default(now())
updatedAt       DateTime            @updatedAt
```

#### `CommissionPlan`

```
id          String          @id @default(cuid())
name        String
type        PlanType        // FLAT | PERCENTAGE | TIERED
flatAmount  Decimal?        @db.Decimal(10, 2)
percentage  Decimal?        @db.Decimal(5, 4)
tiers       Json?           // Array of {minProfit, maxProfit, rate}
isDefault   Boolean         @default(false)
createdAt   DateTime        @default(now())
```

#### `TradeIn`

```
id              String      @id @default(cuid())
customerId      String?
leadId          String?
make            String
model           String
year            Int
mileage         Int
condition       String
estimatedValue  Decimal?    @db.Decimal(10, 2)
agreedValue     Decimal?    @db.Decimal(10, 2)
notes           String?
status          String      // SUBMITTED | VALUED | ACCEPTED | DECLINED
createdAt       DateTime    @default(now())
```

#### `Location`

```
id          String      @id @default(cuid())
name        String
slug        String      @unique
city        String
region      String
country     String
address     String
lat         Decimal?
lng         Decimal?
phone       String?
email       String?
hours       Json?       // {mon: "9-17", tue: "9-17", ...}
isMain      Boolean     @default(false)
createdAt   DateTime    @default(now())
```

#### `LeadNote`

```
id          String      @id @default(cuid())
leadId      String
authorId    String
content     String      @db.Text
createdAt   DateTime    @default(now())
```

#### `Communication`

```
id          String              @id @default(cuid())
leadId      String?
customerId  String?
channel     CommChannel         // EMAIL | SMS | WHATSAPP | PHONE | IN_PERSON
direction   CommDirection       // OUTBOUND | INBOUND
subject     String?
body        String              @db.Text
sentAt      DateTime
staffId     String?
automated   Boolean             @default(false)
createdAt   DateTime            @default(now())
```

#### `Notification`

```
id          String      @id @default(cuid())
userId      String
type        String      // LEAD_ASSIGNED | SLA_BREACH | RESERVATION_NEW | etc.
title       String
message     String
read        Boolean     @default(false)
link        String?
createdAt   DateTime    @default(now())
```

#### `GDPRRequest`

```
id              String          @id @default(cuid())
customerId      String
type            GDPRRequestType // DELETION | ACCESS | EXPORT
status          RequestStatus   // PENDING | PROCESSING | COMPLETED
requestedAt     DateTime        @default(now())
completedAt     DateTime?
processedById   String?
notes           String?
```

#### `AuditLog`

```
id          String      @id @default(cuid())
userId      String?
action      String      // VEHICLE_PUBLISHED, DEPOSIT_CAPTURED, etc.
entityType  String
entityId    String
before      Json?
after       Json?
ip          String?
userAgent   String?
createdAt   DateTime    @default(now())
```

### 4.2 Enumerations

```prisma
enum VehicleStatus     { AVAILABLE RESERVED SOLD ARCHIVED DRAFT }
enum VehicleCondition  { NEW USED }
enum MediaType         { PHOTO VIDEO TOUR_360 BROCHURE }
enum LeadSource        { WEBSITE WHATSAPP GOOGLE WALK_IN REFERRAL PHONE SOCIAL }
enum LeadStatus        { NEW CONTACTED QUALIFIED NEGOTIATING LOST CONVERTED }
enum ReservationStatus { PENDING ACTIVE COMPLETED CANCELLED EXPIRED }
enum DealStatus        { OPEN INSPECTION CLOSED LOST }
enum CommissionStatus  { PENDING APPROVED PAID }
enum PlanType          { FLAT PERCENTAGE TIERED }
enum StaffRole         { SALESPERSON INVENTORY_MANAGER FINANCE_CONTROLLER MARKETING_MANAGER ADMIN SUPER_ADMIN }
enum OfflinePaymentMethod { WIRE CASH CHEQUE POS BANK_TRANSFER }
enum CommChannel       { EMAIL SMS WHATSAPP PHONE IN_PERSON }
enum CommDirection     { INBOUND OUTBOUND }
enum GDPRRequestType   { DELETION ACCESS EXPORT }
enum RequestStatus     { PENDING PROCESSING COMPLETED }
```

---

## 5. Authentication & Authorization

### 5.1 Customer Auth

- Provider: NextAuth.js with Credentials + Google OAuth
- Session: JWT-based, stored in `httpOnly` cookie
- Routes protected: `/account/**`
- Middleware: `middleware.ts` checks session and redirects unauthenticated users to `/login`

### 5.2 Admin Auth

- Provider: NextAuth.js with Credentials only (no OAuth for admin)
- Routes protected: `/admin/**`
- Middleware: Checks session AND validates `StaffRole` against required permission
- Roles enforcement: Each admin page/API route checks role via `getServerSession()` or `auth()` helper

### 5.3 Permission Matrix

| Feature              | SALESPERSON | INVENTORY_MANAGER | FINANCE_CONTROLLER | MARKETING_MANAGER | ADMIN | SUPER_ADMIN |
| -------------------- | ----------- | ----------------- | ------------------ | ----------------- | ----- | ----------- |
| View own leads       | ✅          | ❌                | ❌                 | ❌                | ✅    | ✅          |
| View all leads       | ❌          | ❌                | ❌                 | ❌                | ✅    | ✅          |
| Manage inventory     | ❌          | ✅                | ❌                 | ❌                | ✅    | ✅          |
| View financials      | ❌          | ❌                | ✅                 | ❌                | ✅    | ✅          |
| Capture deposits     | ❌          | ❌                | ✅                 | ❌                | ✅    | ✅          |
| View own commissions | ✅          | ❌                | ❌                 | ❌                | ✅    | ✅          |
| View all commissions | ❌          | ❌                | ✅                 | ❌                | ✅    | ✅          |
| Manage marketing     | ❌          | ❌                | ❌                 | ✅                | ✅    | ✅          |
| Manage settings      | ❌          | ❌                | ❌                 | ❌                | ✅    | ✅          |
| Assign roles         | ❌          | ❌                | ❌                 | ❌                | ❌    | ✅          |
| GDPR requests        | ❌          | ❌                | ❌                 | ❌                | ✅    | ✅          |

### 5.4 Session Data Shape

```typescript
interface Session {
  user: {
    id: string;
    email: string;
    name: string;
    role: "CUSTOMER" | StaffRole;
    staffId?: string; // if admin user
    customerId?: string; // if customer user
  };
}
```

---

## 6. Client-Side Pages & Requirements

### 6.1 Homepage — `/`

**Rendering:** ISR (revalidate: 3600)

**Purpose:** Primary entry point. Must convert visitors into leads or inventory browsers within seconds.

**Requirements:**

- Hero section with headline, sub-copy, and two CTAs: "Browse Inventory" and "Reserve a Vehicle"
- Featured inventory grid — 6 vehicles marked as `featured: true` in admin, sorted by `publishedAt DESC`
- "How It Works" section — 4-step visual explainer (Browse → Enquire → Reserve → Drive Away)
- Trust/stats bar — configurable metrics (vehicles sold, years in business, Google rating)
- Testimonials carousel — pulled from admin-managed testimonials table
- Video section — embeds a brand or walk-around video from CDN
- CTA banner — secondary conversion strip before footer
- Full JSON-LD `Organization` schema injected in page head
- Open Graph meta tags: `og:title`, `og:description`, `og:image`, `og:url`
- Performance target: LCP < 2.5s, CLS < 0.1, FID < 100ms

---

### 6.2 Inventory Listing — `/inventory`

**Rendering:** SSR on every request

**Purpose:** Primary vehicle browsing interface. Must support filtering, sorting, and searching across the full inventory.

**Requirements:**

- Fetch all `AVAILABLE` and `RESERVED` vehicles from database (paginated, 12 per page)
- Filter panel supporting:
  - Make (multi-select checkboxes)
  - Model (dependent on Make selection)
  - Year range (min/max slider)
  - Price range (min/max slider)
  - Body type (multi-select)
  - Fuel type (multi-select)
  - Transmission (multi-select)
  - Mileage (max slider)
  - Condition (New / Used toggle)
- Sort options: Price Low-High, Price High-Low, Newest First, Oldest First, Most Viewed
- Keyword search bar (searches make, model, trim, description) — debounced 400ms
- Toggle between grid view and list view (preference persisted in `localStorage`)
- Each vehicle card must show: hero image, make/model/year/trim, price, mileage, fuel type, status badge, CTA button
- Status badges: `Available` (green), `Reserved` (amber), `Sold` (grey — shown but unclickable)
- Active filter chips displayed below search bar, each individually removable
- Empty state component when no results match filters
- Pagination controls at bottom (URL-based: `?page=2`)
- Filter state reflected in URL query params for shareable filtered URLs
- `ItemList` JSON-LD schema for the inventory page
- `<title>` and meta description dynamically generated with active filter context

---

### 6.3 Vehicle Detail Page (VDP) — `/inventory/[slug]`

**Rendering:** SSR with on-demand ISR revalidation on vehicle update

**Purpose:** The primary conversion page. Every feature of this page exists to move the visitor from browsing to reserving.

**Requirements:**

#### Media Section

- Primary 360° virtual tour viewer embedded via iframe or SDK (CloudPano / 3DVista API)
- Fallback photo gallery with thumbnail strip if no 360 tour exists
- Fullscreen gallery mode (lightbox) triggered on hero image click
- Video player for walk-around or feature demo videos (lazy-loaded)
- Interactive hotspot overlay layer on top of 360 viewer
  - Hotspots are stored as `{x, y, label, videoUrl}` JSON in the vehicle record
  - Clicking a hotspot opens a modal with the associated video
- "Live Video Call" button — opens a calendly/booking link or Socket.IO live tour session
- Media thumbnails: photos, then 360 icon, then video icon (ordered)

#### Vehicle Information Section

- Vehicle title: `{Year} {Make} {Model} {Trim}`
- Price display with currency symbol — formatted per locale
- VehicleStatusBadge (Available / Reserved / Sold)
- "Reserve This Vehicle" primary CTA button — disabled if `RESERVED` or `SOLD`
- Specification table: all technical fields from `Vehicle` model displayed in labeled rows, grouped:
  - Engine & Performance
  - Dimensions & Weight
  - Fuel & Efficiency
  - Safety & Ratings
- Full feature list — rendered from `features[]` array, displayed as icon+label chips
- AI-generated description — displayed with "Read More" expand beyond 300 chars
- Known damages disclosure (if populated) — displayed with amber warning styling

#### Action Section

- Finance calculator widget (embedded, not linked away):
  - Inputs: Vehicle price (pre-filled), deposit amount, loan term (months), interest rate
  - Output: Estimated monthly payment (computed client-side)
  - Disclaimer: "Estimate only. Contact us for finance options."
- Trade-in prompt — short CTA linking to `/trade-in` with vehicle slug in query
- Enquiry form (name, email, phone, optional message) — submits to `POST /api/leads`
- "Schedule Test Drive" form — date/time picker + contact details
- "Get Today's Price" form — name + contact, triggers immediate salesperson alert
- WhatsApp button — `https://wa.me/{WHATSAPP_NUMBER}?text=I'm interested in the {Year} {Make} {Model}` pre-filled

#### SEO Requirements

- `<title>`: `{Year} {Make} {Model} {Trim} | {Brokerage Name}`
- `<meta name="description">`: First 155 chars of AI description
- Canonical URL: absolute URL of this VDP
- Open Graph: `og:title`, `og:description`, `og:image` (hero image CDN URL), `og:url`, `og:type: "website"`
- Twitter Card: `summary_large_image`
- JSON-LD: Full `Car` schema (see Section 12)

#### Other

- Breadcrumb: Home → Inventory → {Make} {Model}
- "Similar Vehicles" section — 4 vehicles with same make or body type, excluding current vehicle
- Share button — Web Share API on mobile, copy URL on desktop
- View count incremented on page load via `POST /api/vehicles/[id]/view` (fire-and-forget)

---

### 6.4 Location Landing Pages — `/locations/[city]`

**Rendering:** SSG with ISR (revalidate: 86400)

**Purpose:** Local SEO capture for city-specific automotive searches.

**Requirements:**

- Statically generated for each `Location` record in database via `generateStaticParams()`
- Hero: "Premium Vehicles Available in {City}"
- Embedded Google Maps iframe for the brokerage location in that city
- Business hours display pulled from `Location.hours`
- Local phone number and contact form
- Snippet of available inventory in/near that location (4 vehicles)
- Local customer testimonials if tagged by location
- `LocalBusiness` JSON-LD schema with `geo`, `openingHours`, `telephone`, `address`
- `<title>`: `Automotive Brokerage in {City} | {Brokerage Name}`

---

### 6.5 Reservation Flow — `/reserve/[vehicleId]`

**Rendering:** SSR (auth-gated — customer must be logged in or prompted to register)

**Requirements:**

- Step 1: Reservation Summary
  - Vehicle image, name, year, price
  - Deposit amount (configured in admin settings, e.g., $1,000)
  - Reservation policy text (configurable in settings)
  - Terms and conditions checkbox (required to proceed)
- Step 2: Contact Verification
  - If not logged in: prompt to log in or register (customer account)
  - If logged in: display name, email, phone — allow editing phone
- Step 3: Payment
  - Stripe Elements card input (`CardElement` or Payment Element)
  - "Place Hold" button — does NOT charge card, only authorises
  - Stripe intent created server-side via `POST /api/reservations/create-intent`
  - Loading state during payment processing
  - Error handling for declined cards, insufficient funds
- On success:
  - Vehicle status updated to `RESERVED` in database
  - Socket.IO event emitted: `vehicle:status_changed`
  - Confirmation email sent to customer via Resend
  - Alert sent to admin/assigned salesperson via email + SMS
  - Redirect to `/reserve/success`

---

### 6.6 Reservation Success — `/reserve/success`

- Confirmation card with booking reference number
- Vehicle summary (image, name)
- What happens next (3-step explainer: We'll contact you, Visit us, Complete purchase)
- "View Your Reservations" button → `/account/reservations`
- Salesperson contact details (name, phone, email)

---

### 6.7 Reservation Cancelled — `/reserve/cancelled`

- Cancellation message with booking reference
- Deposit release confirmation text
- "Browse Other Vehicles" CTA

---

### 6.8 Finance Calculator — `/finance-calculator`

**Rendering:** CSR (no sensitive data)

**Requirements:**

- Standalone page version of the calculator widget
- Inputs: Vehicle price, deposit/down payment, loan term (12–84 months, slider), annual interest rate
- Computed output: Monthly payment, total amount payable, total interest
- Optional amortisation table (collapsible, shows month-by-month breakdown)
- Disclaimer: "This calculator provides an estimate. Actual rates depend on your credit profile."
- SEO meta tags targeting "car finance calculator" keywords

---

### 6.9 Trade-In Valuation — `/trade-in`

**Rendering:** SSR

**Requirements:**

- Multi-field form:
  - Vehicle make, model, year (dropdowns)
  - Mileage (number input)
  - Condition (Excellent / Good / Fair / Poor — radio)
  - Service history (Full / Partial / None — radio)
  - Known issues (textarea)
  - Contact: first name, last name, email, phone
- On submit: creates `TradeIn` record + `Lead` record in database
- Auto-assigns lead to a salesperson per routing rules
- Confirmation email sent to customer
- Estimated value shown if admin has configured valuation logic (optional v1 feature)

---

### 6.10 Customer Account — `/account`

**Rendering:** SSR, auth-gated (`CUSTOMER` role)

**Sub-pages:**

- `/account` — Overview dashboard (greeting, active reservations snippet, recent enquiries)
- `/account/reservations` — Full list of reservations with status, vehicle, deposit info
- `/account/enquiries` — History of all submitted enquiries/leads
- `/account/profile` — Edit name, email, phone, password
- `/account/privacy` — Consent management, marketing opt-in/out, data deletion request

**Requirements:**

- All data fetched server-side using authenticated session `customerId`
- `ReservationCard` shows: vehicle image, name, status badge, deposit amount, reservation date, "Contact Salesperson" button
- Data deletion request creates `GDPRRequest` record and notifies admin

---

### 6.11 Auth Pages

#### `/login`

- Email + password form
- "Continue with Google" button (OAuth)
- "Forgot password?" link
- Redirect to `/account` on success or to `callbackUrl` if redirected from a protected page

#### `/register`

- First name, last name, email, phone, password, confirm password
- Terms of service and privacy policy checkbox (required)
- Marketing consent checkbox (optional)
- On submit: creates `User` + `Customer` records; sends verification email

#### `/forgot-password`

- Email input
- On submit: generates reset token, sends email with link via Resend

#### `/reset-password`

- Token validated from URL query param
- New password + confirm password inputs
- On submit: updates password hash, invalidates token

---

### 6.12 Static / Legal Pages

| Page             | Route               | Notes                                 |
| ---------------- | ------------------- | ------------------------------------- |
| About            | `/about`            | CMS-editable or static MDX            |
| Contact          | `/contact`          | Contact form + map + hours            |
| FAQ              | `/faq`              | Accordion list, admin-manageable      |
| Privacy Policy   | `/privacy-policy`   | Legal text, versioned                 |
| Terms of Service | `/terms-of-service` | Legal text, versioned                 |
| Sitemap          | `/sitemap`          | HTML sitemap linking all VDPs + pages |

---

## 7. Admin-Side Pages & Requirements

All admin pages live under `/admin/**` and require an authenticated `Staff` session. The admin layout renders the sidebar, topbar, and notification drawer.

---

### 7.1 Admin Login — `/admin/login`

- Email + password only (no OAuth for admin)
- Rate-limited: max 10 attempts per IP per 15 minutes (implement with Upstash Redis)
- On success: redirect to `/admin`
- Failed login attempt logged in `AuditLog`

---

### 7.2 Main Dashboard — `/admin`

**Rendering:** CSR with SWR polling every 60 seconds

**KPI Cards (top row):**

- Total vehicles in inventory (by status: Available / Reserved / Sold this month)
- New leads today vs yesterday (with trend arrow)
- Active reservations count
- Gross revenue this month
- Average lead response time (minutes)
- Commissions pending approval

**Widgets:**

- Revenue chart — last 12 months, bar chart (monthly gross profit)
- Inventory status donut chart (Available / Reserved / Sold / Archived split)
- Recent leads table — last 10 leads with name, vehicle, source, status, time, SLA indicator
- Recent reservations — last 5 with customer name, vehicle, deposit status
- SLA breach alerts banner — leads uncontacted beyond configured threshold, shown in red
- Accounting sync status card — last Xero/QB sync time, error state if failed
- Quick actions: "Add Vehicle", "View Leads", "View Reservations"
- Activity feed — last 20 system events (vehicle published, deposit captured, lead assigned, etc.)

---

### 7.3 Inventory Pages

#### `/admin/inventory` — Vehicle List

- Sortable, paginated data table (20 rows per page)
- Columns: Thumbnail, Year/Make/Model/Trim, VIN, Price, Status, Published, Leads, Views, Actions
- Global search by make, model, VIN
- Filter by: Status, Condition, Make, Published/Draft
- Bulk actions: Publish, Archive, Delete (with confirmation modal)
- "Add Vehicle" primary button → `/admin/inventory/new`
- Export button: download current filtered view as CSV
- Real-time status updates via Socket.IO (status badge updates without page refresh)

#### `/admin/inventory/new` — Add Vehicle

Multi-section form, all sections on one long scrollable page with sticky "Save" button.

**Section 1 — VIN & Auto-Population**

- VIN input field (17 characters, validated)
- "Decode VIN" button → calls VIN decoder API → populates all spec fields below
- Loading state during decode
- Manual override allowed on all auto-populated fields
- VIN uniqueness validated against database on blur

**Section 2 — Basic Information**

- Make, Model, Year, Trim (all text inputs, pre-filled from VIN decode)
- Body type (dropdown)
- Condition (New / Used toggle)
- Colour (exterior + interior, colour picker or text)
- Number of doors, seats

**Section 3 — Technical Specifications**

- Engine size, cylinders, horsepower, torque
- Transmission, drivetrain, fuel type
- Fuel consumption (L/100km or MPG), CO₂ emissions
- 0-100 km/h acceleration, top speed
- Dimensions: length, width, height (mm), kerb weight (kg)
- Safety rating (text, e.g., "5-Star Euro NCAP")

**Section 4 — Pricing & Financials** _(FINANCE_CONTROLLER or ADMIN only)_

- Purchase cost (hidden from Inventory Manager role)
- Sale price
- Reconditioning costs
- Floorplan interest (if applicable)
- VAT margin scheme eligible (toggle)
- Currency selector

**Section 5 — Description**

- "Generate AI Description" button → calls AI generation API → populates textarea
- Editable rich textarea
- Character count display

**Section 6 — Features**

- Tag-style input: type a feature, press Enter to add
- Suggested features autocomplete (from a predefined list)
- Drag to reorder

**Section 7 — Known Issues / Damages**

- Textarea for known vehicle issues (required for Used condition)

**Section 8 — Assignment**

- Location selector (dropdown of `Location` records)
- Assigned broker selector (dropdown of `Staff` with SALESPERSON role)

**Section 9 — Status & Publishing**

- Status selector: Draft / Available / Archived
- "Publish Now" toggle (sets `publishedAt` to current timestamp)

**Save behaviour:**

- "Save as Draft" — saves with `status: DRAFT`
- "Publish" — saves with `status: AVAILABLE` and `publishedAt: now()`
- Unsaved changes warning on navigation away
- Creates `AuditLog` entry on save

#### `/admin/inventory/[id]` — Edit Vehicle

- Same form as "Add Vehicle" but pre-populated
- Shows creation date, last modified, view count, enquiry count
- "View Live Listing" button (opens VDP in new tab)
- Danger zone: Delete vehicle (with confirmation — only if no active reservations)

#### `/admin/inventory/[id]/media` — Vehicle Media Manager

- Current media displayed in drag-and-drop reorder grid
- Click photo to set as hero image
- Delete button on each media item (with confirmation)
- Upload zone: drag-and-drop or click to select (accepts jpg, png, webp, mp4, mov)
- Files uploaded to Cloudflare R2 / Uploadthing → CDN URL stored in `VehicleMedia`
- 360 Tour section:
  - Input field for embed URL (CloudPano / 3DVista tour URL)
  - "Test Embed" preview button
  - Hotspot manager: click "Add Hotspot" → enter x/y position, label, video URL
- Upload progress bar per file
- Max file sizes: Photos 10MB, Videos 500MB

#### `/admin/inventory/[id]/preview` — Live Preview

- Renders the public VDP inside an iframe
- Mobile/tablet/desktop viewport toggle
- "Go Live" button if vehicle is in Draft status

---

### 7.4 Leads Pages

#### `/admin/leads` — Leads List

- Data table with columns: Customer name, Vehicle interest, Source, Assigned to, Status, Response time, SLA indicator, Created, Actions
- SLA indicator: green (within threshold), amber (approaching), red (breached)
- Filter by: Status, Source, Assigned To, Date range, SLA status
- Search by customer name or email
- Bulk reassignment: select multiple leads → assign to a salesperson
- "Unassigned" filter tab for quick access to unrouted leads

#### `/admin/leads/[id]` — Lead Detail

- Customer info panel: name, email, phone, source, creation time
- Vehicle of interest panel: image, name, price, current status
- Lead status dropdown (changeable inline)
- Assigned salesperson (changeable inline)
- SLA timer: "First contacted X minutes ago" or countdown to breach
- Lead notes timeline: chronological, most recent first
  - Add note form: textarea + submit
  - Each note shows: author avatar, timestamp, content
- Communications log: all emails, SMS, WhatsApp sent/received for this lead
- Action buttons: "Send Email", "Send WhatsApp", "Mark as Contacted", "Convert to Deal", "Mark as Lost"
- Lost reason modal when marking as lost (required dropdown + optional notes)

#### `/admin/enquiries` — General Enquiries

- Contact form submissions not tied to a specific vehicle
- Same table structure as leads but simpler
- Mark as responded / archived

---

### 7.5 Reservations Pages

#### `/admin/reservations` — Reservations List

- Columns: Customer, Vehicle, Deposit Amount, Status, Authorised At, Expires At, Actions
- Filter by: Status (Active / Completed / Cancelled / Expired), Date range
- "Expiring Soon" tab: authorisations expiring within 48 hours
- Each row has quick actions: "Capture", "Release", "View"

#### `/admin/reservations/[id]` — Reservation Detail

- Full reservation summary card: vehicle image, customer name, deposit amount, Stripe payment intent ID
- Deposit status with Stripe dashboard link
- Authorization expiry countdown
- **Capture Deposit** button:
  - Opens confirmation modal: "Capture $X from {Customer}?"
  - Option to enter different capture amount (overcapture, within Stripe limits)
  - On confirm: calls `POST /api/reservations/[id]/capture`
  - Updates reservation status to `COMPLETED`
- **Release Authorization** button:
  - Opens confirmation modal with reason input (required)
  - On confirm: calls `POST /api/reservations/[id]/release`
  - Updates vehicle status back to `AVAILABLE`
  - Socket.IO event emitted
- **Log Offline Payment** form:
  - Method (Wire / Cash / Cheque / POS / Bank Transfer)
  - Amount
  - Reference number
  - Date received
  - Notes
  - On submit: creates settlement record, links to Deal
- Contract upload: drag-and-drop PDF upload for signed reservation agreement
- Link to full Deal record if deal exists

---

### 7.6 Deals Pages

#### `/admin/deals` — Deals List

- Columns: Vehicle, Customer, Salesperson, Sale Price, Gross Profit, Status, Closed Date
- Filter by: Status, Salesperson, Date range
- Summary row at bottom: total revenue, total gross profit for current filter

#### `/admin/deals/[id]` — Deal Detail

- Deal Summary Card: Vehicle, customer, salesperson, status stepper
- Financial Breakdown Table:
  - Sale Price
  - Purchase Cost
  - Reconditioning Costs
  - Floorplan Interest
  - Other Costs
  - **Gross Profit** (computed, highlighted)
  - VAT Due (if margin scheme)
  - Finance Reserve
  - Documentary Fees
  - Commission due (linked to salesperson's plan)
- Deal Status Stepper: Enquiry → Reserved → Inspection → Closed
- Linked Lead panel (collapsible)
- Linked Reservation panel (collapsible, shows payment status)
- Accounting sync status: "Synced to Xero ✓" or "Sync Pending / Failed"
- "Force Sync" button for manual accounting push
- Internal notes section
- Commission approval button (FINANCE_CONTROLLER only)

---

### 7.7 Customer Pages

#### `/admin/customers` — Customers List

- Searchable by name, email, phone
- Columns: Name, Email, Phone, Registrations, Reservations, Total Spent, Joined Date
- Click row to view customer profile

#### `/admin/customers/[id]` — Customer Profile

- Profile header: name, email, phone, registration date, consent status
- Reservations tab: all reservations with vehicle, status, amount
- Enquiries/Leads tab: all lead submissions
- Communications tab: all email, SMS, WhatsApp history
- Notes tab: internal staff notes
- Privacy section:
  - Consent date and IP
  - Marketing opt-in status
  - "Process Data Deletion Request" button — creates `GDPRRequest` record and sets customer `deletedAt`

---

### 7.8 Team Pages

#### `/admin/team` — Staff List

- Table: Name, Email, Role, Commission Plan, Active Leads, Sales This Month, Status
- "Add Staff Member" button

#### `/admin/team/new` — Add Staff Member

- First name, last name, email, phone
- Role selector (dropdown, `StaffRole` enum)
- Commission plan assignment (dropdown)
- Temporary password set (must be changed on first login)

#### `/admin/team/[id]` — Edit Staff Member

- Same fields as Add, plus:
- Toggle: Active / Inactive
- Reset password button (sends email)
- Assigned leads panel (view only)

#### `/admin/team/[id]/commissions` — Staff Commission History

- Table of all commission entries for this salesperson
- Columns: Deal, Vehicle, Gross Profit, Rate, Payout Amount, Status, Pay Run
- Summary: total earned this month, this year, lifetime
- Filter by: Status, Date range, Pay Run

---

### 7.9 Commission Pages

#### `/admin/commissions` — Commission Ledger

- Full table of all commission entries across all staff
- Filter by: Salesperson, Status, Date range, Pay Run
- Summary totals per salesperson at bottom

#### `/admin/commissions/pay-runs` — Pay Runs List

- Table of all pay runs: Run date, period, total amount, staff count, status
- "Create Pay Run" button: selects period (date range), includes all `PENDING` commissions in period

#### `/admin/commissions/pay-runs/[id]` — Pay Run Detail

- List of all commission lines in this run
- Per salesperson: vehicles sold, total gross profit, total commission
- "Approve All" button (FINANCE_CONTROLLER role required)
- "Export CSV" — payroll-ready export file
- After approval: all included commissions marked as `APPROVED`

---

### 7.10 Finance Pages

#### `/admin/finance` — Financial Overview

- Period selector: This Month / Last Month / Quarter / Year / Custom
- KPI cards: Revenue, COGS, Gross Profit, Gross Margin %, VAT Collected
- Revenue by Month chart (bar)
- Gross Profit by Salesperson chart (horizontal bar)
- Top 10 vehicles by profit table

#### `/admin/finance/transactions` — Payment Transactions

- All Stripe events: authorisations, captures, releases, refunds
- Columns: Date, Customer, Vehicle, Type, Amount, Stripe ID, Status
- Filter by: Type, Status, Date range
- Click row: link to Stripe dashboard for that payment intent
- Search by Stripe payment intent ID

#### `/admin/finance/transactions/[id]` — Transaction Detail

- Full event detail from Stripe (via `stripe.paymentIntents.retrieve()`)
- Linked customer, vehicle, reservation, deal
- Stripe event timeline (charges, captures, releases)
- Download receipt button

#### `/admin/finance/accounting-sync` — Accounting Sync Status

- Connection status: Xero / QuickBooks connected / disconnected
- Last successful sync timestamp
- Error log: failed sync attempts with reason
- "Sync Now" manual trigger button
- Field mapping configuration (which platform fields map to which accounting fields)
- OAuth reconnect button

#### `/admin/finance/vat` — VAT Margin Scheme

- Lists all vehicles eligible for margin scheme (`vatMarginEligible: true`)
- Columns: Vehicle, Purchase Cost, Sale Price, Margin, VAT Rate (1/6), VAT Due
- Period filter for tax return preparation
- "Export for Accountant" CSV

---

### 7.11 Analytics Pages

#### `/admin/analytics` — Platform Analytics

- Period selector
- Charts:
  - Sessions over time (line)
  - Lead sources breakdown (pie: Website / WhatsApp / Google / Social / Walk-in)
  - Conversion funnel (Visitors → VDP Views → Enquiries → Reservations → Closed Deals)
  - Revenue trend (line, last 12 months)
  - Average response time trend (line, by week)

#### `/admin/analytics/inventory` — Inventory Performance

- Table: Vehicle, Views, Enquiries, Reservations, Days on Lot, Status, Conversion Rate
- Sort by: Views, Enquiries, Conversion Rate, Days on Lot
- Highlights: fastest-selling vehicles, highest-enquiry vehicles, stale inventory (>60 days)

---

### 7.12 Marketing Pages

#### `/admin/marketing/feeds` — Google Merchant Center Feed

- Feed generation status (last generated timestamp)
- Feed compliance checker — flags vehicles missing required attributes
- Preview table: sample of feed output (first 10 rows)
- "Generate Feed" button → triggers `GET /api/feeds/google-merchant`
- Feed URL for submission to Google Merchant Center
- Error log: vehicles excluded from feed and reason

#### `/admin/marketing/seo` — SEO Health

- Table of all published vehicles with schema validation status
- Columns: Vehicle, Schema Valid, OG Tags, Canonical, Last Checked
- "Validate All" button — runs structured data check on all VDPs
- Individual "Validate" per vehicle
- Google Rich Results test link per vehicle

#### `/admin/marketing/locations` — Local SEO Pages

- List of configured `Location` records
- "Add Location" button
- Edit location details (name, city, address, coordinates, hours, phone)
- Toggle: publish/unpublish location landing page

---

### 7.13 Settings Pages

#### `/admin/settings` — General Settings

- Brokerage name, trading name
- Logo upload
- Primary contact email and phone
- Physical address
- Google Business Profile ID
- WhatsApp Business number
- Default currency

#### `/admin/settings/roles` — Role & Permissions

- Visual permission matrix (read-only display of what each role can do)
- Cannot modify permissions in v1 (permissions are code-level)
- Staff role assignment managed via `/admin/team/[id]`

#### `/admin/settings/notifications` — Notification Rules

- Lead SLA threshold (minutes before escalation, default: 30)
- Escalation recipient (select admin user)
- New lead alert recipients (email + SMS)
- New reservation alert recipients
- Failed accounting sync alert recipients
- Authorization expiry warning (hours before, default: 48)

#### `/admin/settings/payment` — Stripe & Payment Settings

- Stripe connection status (publishable key, secret key — masked)
- Stripe webhook endpoint URL (read-only, shown for setup)
- Default deposit amount (configurable per currency)
- Minimum deposit amount
- Maximum deposit amount
- Authorization hold period (days, default: 7)
- Overcapture enabled toggle + maximum percentage

#### `/admin/settings/accounting` — Accounting Integration

- Xero OAuth connect/disconnect button
- QuickBooks OAuth connect/disconnect button (alternative to Xero)
- Sync frequency (Manual / Every Hour / Every Day)
- Account mapping: which GL account receives vehicle sale revenue, COGS, etc.
- VAT margin scheme enabled toggle

#### `/admin/settings/commission-plans` — Commission Plans

- List of all `CommissionPlan` records
- "Add Plan" button
- Edit plan form:
  - Plan name
  - Type: Flat / Percentage / Tiered
  - If Flat: fixed amount per vehicle sold
  - If Percentage: % of gross profit
  - If Tiered: table of `{minUnits, maxUnits, rate}` rows — add/remove rows
- Set as default plan toggle
- Cannot delete a plan that has staff assigned to it

#### `/admin/settings/lead-routing` — Lead Routing Rules

- Ordered list of routing rules (drag to reprioritise)
- "Add Rule" button
- Each rule: `IF {condition} THEN assign to {salesperson or round-robin group}`
- Conditions: vehicle type, price range, location, lead source
- Fallback: round-robin across all active salespersons
- Enable/disable individual rules

#### `/admin/settings/chat` — AI Chat & WhatsApp

- AI chatbot enabled toggle
- Chatbot name and avatar upload
- FAQ entries: question + answer pairs (add/remove)
- Escalation trigger: when to hand off to human (e.g., after 3 unanswered questions)
- WhatsApp Business API: phone number, API key, webhook URL

#### `/admin/settings/gdpr` — GDPR & Privacy

- List of pending `GDPRRequest` records
- Process deletion: confirmation modal, then automated deletion across linked records
- Consent log: searchable table of all customer consent events (date, IP, type)
- "Do Not Sell" opt-out log
- Data retention policy configuration (days until auto-purge of inactive leads)

---

## 8. Component Inventory

### 8.1 Shared UI Primitives (`/components/ui/`)

These are base-level, unstyled-then-styled components using shadcn/ui and Tailwind.

| Component           | Description                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| `Button`            | Variants: primary, secondary, ghost, danger, outline. Sizes: sm, md, lg. Loading state with spinner. |
| `Input`             | Text, number, email, tel, password. With label, error state, helper text.                            |
| `Select`            | Searchable dropdown. Single and multi-select variants.                                               |
| `Checkbox`          | With label, indeterminate state for bulk selects.                                                    |
| `RadioGroup`        | Styled radio buttons with optional card-style layout.                                                |
| `Textarea`          | Multi-line input with character count display.                                                       |
| `Switch`            | Toggle switch for boolean settings.                                                                  |
| `Slider`            | Range slider for price/mileage/year filters.                                                         |
| `DatePicker`        | Calendar-based date selection. Range variant for reports.                                            |
| `Modal`             | Overlay with backdrop, header, body, footer slots. Prevents scroll.                                  |
| `Drawer`            | Side-panel slide-in. Left and right variants.                                                        |
| `Sheet`             | Bottom-sheet variant for mobile.                                                                     |
| `Toast`             | Success, error, warning, info. Auto-dismiss with progress bar.                                       |
| `Tooltip`           | Hover-triggered info popup.                                                                          |
| `Popover`           | Click-triggered floating panel.                                                                      |
| `DropdownMenu`      | Action menus and context menus.                                                                      |
| `Badge`             | Inline label. Variants: success, warning, error, info, neutral.                                      |
| `Spinner`           | Loading indicator. Sizes: sm, md, lg.                                                                |
| `Skeleton`          | Content placeholder during loading. Variants: line, card, table-row.                                 |
| `ProgressBar`       | Step progress and upload progress.                                                                   |
| `Accordion`         | Expand/collapse panels. Single and multi-open modes.                                                 |
| `Tabs`              | Tab strip with panel content. URL-hash aware variant.                                                |
| `Carousel`          | Touch-swipeable horizontal scroll. Auto-play optional.                                               |
| `Avatar`            | Profile image with initials fallback.                                                                |
| `Divider`           | Horizontal rule with optional centred label.                                                         |
| `EmptyState`        | Illustration + heading + sub-text + optional CTA.                                                    |
| `ErrorBoundary`     | React error boundary with fallback UI.                                                               |
| `ImageWithFallback` | Next.js Image with error fallback and skeleton.                                                      |
| `StarRating`        | 1–5 star display. Interactive and read-only modes.                                                   |
| `Stepper`           | Multi-step flow indicator. Horizontal and vertical layouts.                                          |
| `ConfirmationModal` | Pre-wired "Are you sure?" modal with confirm/cancel callbacks.                                       |
| `CurrencyDisplay`   | Formats number to currency string with locale awareness.                                             |
| `CopyButton`        | Button that copies a string to clipboard with check icon feedback.                                   |

### 8.2 Public Components (`/components/public/`)

| Component                  | Props / Notes                                                            |
| -------------------------- | ------------------------------------------------------------------------ |
| `Header`                   | Logo, nav links, mobile hamburger, "Reserve" CTA button                  |
| `MobileMenu`               | Full-screen drawer nav. Closes on route change.                          |
| `Footer`                   | Links, social icons, GDPR "Do Not Sell" link, copyright                  |
| `CookieBanner`             | Fixed bottom bar. Accept/Reject buttons. Persists choice in cookie.      |
| `SEOHead`                  | Accepts `title`, `description`, `ogImage`, `canonicalUrl`, `jsonLd` prop |
| `HeroSection`              | Video/image background, headline, sub-copy, two CTA buttons              |
| `FeaturedInventory`        | Fetches 6 featured vehicles. Renders `VehicleCard` grid.                 |
| `WhyChooseUs`              | Icon + heading + description. Items configurable via props.              |
| `HowItWorks`               | 4-step explainer with numbered icons and connecting line                 |
| `TestimonialsCarousel`     | `Carousel` wrapper around `TestimonialCard` components                   |
| `TestimonialCard`          | Quote, author name, star rating, optional vehicle purchased              |
| `StatsBar`                 | 3–4 metric tiles (number + label). Data from settings.                   |
| `CTABanner`                | Full-width coloured section with heading and one CTA                     |
| `HomepageVideoSection`     | Lazy-loaded video player with poster image                               |
| `VehicleCard`              | Image, make/model/year, price, mileage, fuel, status badge, CTA          |
| `VehicleGrid`              | Responsive grid of `VehicleCard`. Accepts vehicles array prop.           |
| `VehicleListRow`           | Horizontal list-style vehicle item for list view toggle                  |
| `ViewToggle`               | Grid/List icon buttons. Updates parent state.                            |
| `InventoryFilters`         | Full filter panel — wraps all individual filter components               |
| `FilterChips`              | Displays active filters as dismissible chips                             |
| `SearchBar`                | Debounced input, updates URL `?search=` param                            |
| `SortDropdown`             | Select dropdown for sort order                                           |
| `PaginationControls`       | Prev/Next + page numbers. URL-based (`?page=N`).                         |
| `NoResultsState`           | Empty state for inventory with "Clear Filters" CTA                       |
| `InventorySkeletonLoader`  | Grid of skeleton cards for loading state                                 |
| `VehicleImageGallery`      | Thumbnail strip + main image. Lightbox on click.                         |
| `VehicleTour360`           | iframe embed for CloudPano/3DVista URL                                   |
| `VideoHotspotOverlay`      | Positioned markers on tour iframe, click to open modal                   |
| `HotspotModal`             | Video player modal triggered by hotspot click                            |
| `LiveVideoButton`          | Triggers booking link or Socket.IO live session                          |
| `VehicleTitle`             | Year, make, model, trim in styled heading                                |
| `VehiclePriceBlock`        | Price, currency, optional "From" prefix, availability note               |
| `VehicleStatusBadge`       | Coloured badge: Available / Reserved / Sold                              |
| `VehicleSpecsTable`        | Two-column spec display, grouped by category                             |
| `VehicleFeaturesList`      | Icon+label chip list of features                                         |
| `VehicleDescription`       | Text with "Read More" expand toggle at 300 chars                         |
| `DamagesDisclosure`        | Amber warning card for known vehicle issues                              |
| `FinanceCalculatorWidget`  | Self-contained calculator: inputs + computed output                      |
| `ReserveVehicleButton`     | CTA button, disabled with tooltip if not available                       |
| `EnquireForm`              | Name, email, phone, message. POSTs to `/api/leads`.                      |
| `TestDriveForm`            | Date/time picker + contact form                                          |
| `GetPriceForm`             | Name + contact, triggers immediate alert                                 |
| `WhatsAppButton`           | Pre-filled WA link button with icon                                      |
| `TradeInWidget`            | Mini CTA block linking to trade-in page                                  |
| `SimilarVehicles`          | Horizontal scroll of 4 VehicleCards                                      |
| `ShareButton`              | Web Share API on mobile, copy on desktop                                 |
| `VehicleBreadcrumb`        | Breadcrumb trail with schema.org BreadcrumbList                          |
| `VDPStructuredData`        | Injects Car JSON-LD into `<head>`                                        |
| `LocationHero`             | City-specific hero section                                               |
| `EmbeddedGoogleMap`        | Google Maps iframe for a location                                        |
| `BusinessHours`            | Table of opening hours from Location data                                |
| `LocalInventoryPreview`    | 4 VehicleCards filtered by location                                      |
| `ReservationSummaryCard`   | Vehicle image, name, deposit amount                                      |
| `ReservationTermsCheckbox` | Checkbox with policy text link                                           |
| `StripePaymentForm`        | Stripe Payment Element wrapper                                           |
| `PaymentProcessingSpinner` | Full overlay during Stripe intent confirmation                           |
| `ReservationSuccessCard`   | Reference number, next steps, salesperson contact                        |
| `ChatWidget`               | Floating chat bubble, expands to chat window                             |
| `ChatMessageBubble`        | Message display: user (right) vs bot (left)                              |
| `ChatInputBar`             | Text input + send button + typing indicator                              |
| `WhatsAppFloatingButton`   | Fixed bottom-right WA button                                             |
| `LoanCalculatorForm`       | Full calculator inputs                                                   |
| `MonthlyPaymentResult`     | Computed result display                                                  |
| `AmortisationTable`        | Month-by-month payment breakdown                                         |
| `TradeInForm`              | Multi-step trade-in submission form                                      |
| `AccountSidebar`           | Left nav for account pages                                               |
| `ReservationCard`          | Customer-facing reservation summary                                      |
| `EnquiryHistoryItem`       | Past enquiry row                                                         |
| `AccountDetailsForm`       | Profile edit form                                                        |
| `ConsentManager`           | Privacy settings toggles                                                 |

### 8.3 Admin Components (`/components/admin/`)

| Component                  | Notes                                                                          |
| -------------------------- | ------------------------------------------------------------------------------ |
| `AdminLayout`              | Sidebar + topbar wrapper                                                       |
| `AdminSidebar`             | Collapsible nav, grouped by section, active link highlighting                  |
| `AdminTopbar`              | Page title, notifications bell, user menu                                      |
| `AdminMobileSidebar`       | Drawer version of sidebar                                                      |
| `BreadcrumbNav`            | Admin breadcrumb                                                               |
| `AdminPageHeader`          | Title + primary action slot                                                    |
| `StatCard`                 | KPI tile: icon, label, value, trend indicator                                  |
| `RevenueChart`             | Recharts bar chart, accepts monthly data                                       |
| `InventoryStatusDonut`     | Recharts pie chart of vehicle status distribution                              |
| `ConversionFunnelChart`    | Funnel chart: visitors → enquiries → reservations → sales                      |
| `RecentLeadsWidget`        | Table of last 10 leads                                                         |
| `RecentReservationsWidget` | Last 5 reservations                                                            |
| `AlertsBanner`             | Red/amber alerts for SLA breaches, sync failures                               |
| `QuickActionsPanel`        | Icon button grid for common actions                                            |
| `ActivityFeed`             | Timeline of recent `AuditLog` events                                           |
| `DataTable`                | Reusable table: sortable headers, pagination, row selection, column visibility |
| `TableColumnToggle`        | Dropdown to show/hide DataTable columns                                        |
| `FilterPanel`              | Sidebar panel wrapping filter controls                                         |
| `SearchInput`              | Debounced search for tables                                                    |
| `BulkActionBar`            | Appears on row selection, contains bulk action buttons                         |
| `ExportButton`             | CSV export trigger                                                             |
| `InventoryTable`           | DataTable instance for vehicles                                                |
| `InventoryTableRow`        | Custom row with thumbnail and quick actions                                    |
| `InventoryStatusToggle`    | Inline status switcher for vehicle rows                                        |
| `VehicleForm`              | Full add/edit vehicle form (all sections)                                      |
| `VINDecoderInput`          | VIN field with decode button and loading state                                 |
| `SpecsAutoPopulator`       | Review/confirm decoded specs before saving                                     |
| `PricingSection`           | Role-gated financial fields                                                    |
| `AIDescriptionGenerator`   | Button + textarea with generate/regenerate                                     |
| `FeaturesTagInput`         | Tag input for vehicle features                                                 |
| `MediaUploader`            | Drag-and-drop with progress, reorder, delete                                   |
| `Tour360Manager`           | URL input, embed preview, hotspot list                                         |
| `HotspotEditor`            | Click-to-place hotspot UI on top of tour preview                               |
| `VDPPreviewFrame`          | Iframe with viewport toggle                                                    |
| `LeadsTable`               | DataTable for leads                                                            |
| `LeadTableRow`             | Row with SLA indicator colour coding                                           |
| `LeadDetailCard`           | Full lead information panel                                                    |
| `LeadStatusDropdown`       | Inline status change                                                           |
| `LeadAssignmentDropdown`   | Inline reassignment to staff member                                            |
| `LeadNotesTimeline`        | Chronological note list + add form                                             |
| `LeadCommunicationLog`     | Email/SMS/WA history list                                                      |
| `LeadSLATimer`             | Countdown or elapsed time indicator                                            |
| `LeadSourceBadge`          | Coloured source tag                                                            |
| `ReservationsTable`        | DataTable for reservations                                                     |
| `ReservationDetailCard`    | Full reservation panel                                                         |
| `DepositStatusBadge`       | Authorised / Captured / Released / Expired                                     |
| `CaptureDepositButton`     | Confirm modal + Stripe capture call                                            |
| `ReleaseDepositButton`     | Confirm modal with reason + Stripe release call                                |
| `SettlementRecordForm`     | Offline payment logging form                                                   |
| `DealSummaryCard`          | Deal overview panel                                                            |
| `DealFinancialBreakdown`   | Itemised cost/revenue table with computed profit                               |
| `DealStatusStepper`        | Visual step tracker                                                            |
| `CommissionLedgerTable`    | All commission entries                                                         |
| `CommissionBreakdownCard`  | Per-deal commission calculation display                                        |
| `PayRunTable`              | Pay runs list                                                                  |
| `PayRunDetailTable`        | Lines within a pay run                                                         |
| `FinanceOverviewCards`     | Revenue/profit KPI tiles                                                       |
| `TransactionsTable`        | Stripe event table                                                             |
| `AccountingSyncStatusCard` | Sync health indicator + manual trigger                                         |
| `VATMarginTable`           | Margin scheme calculations                                                     |
| `MerchantFeedStatusCard`   | Feed generation status                                                         |
| `FeedPreviewTable`         | Sample feed rows                                                               |
| `OpenGraphPreviewCard`     | Social share preview simulator                                                 |
| `SchemaHealthTable`        | Schema validation status per vehicle                                           |
| `CommissionPlanForm`       | Create/edit plan with type-specific fields                                     |
| `CommissionPlanList`       | List of plans with edit/delete                                                 |
| `LeadRoutingRuleForm`      | Condition + assignment rule editor                                             |
| `LeadRoutingRuleList`      | Ordered draggable rule list                                                    |
| `RolePermissionMatrix`     | Visual read-only permission grid                                               |
| `NotificationDropdown`     | Bell with unread count, notification list                                      |
| `UserMenuDropdown`         | Avatar + profile/logout menu                                                   |
| `ConfirmationModal`        | Reused from ui/ but with admin styling                                         |
| `InlineEditField`          | Click-to-edit a single field in place                                          |
| `DateRangePicker`          | From/To date picker for reports                                                |
| `AvatarWithName`           | Staff photo/initials + name                                                    |
| `LoadingTableSkeleton`     | Skeleton rows for DataTable loading state                                      |
| `SyncStatusIndicator`      | Green/red pill showing live system health                                      |
| `GDPRRequestQueue`         | List of pending requests with action buttons                                   |
| `ConsentLogTable`          | Searchable consent event history                                               |

---

## 9. Core Feature Specifications

### 9.1 VIN Decoding

**Trigger:** Admin enters a 17-character VIN and clicks "Decode VIN"

**Flow:**

1. Client validates VIN format (regex: `/^[A-HJ-NPR-Z0-9]{17}$/i`)
2. `POST /api/admin/vehicles/decode-vin` called with `{ vin }`
3. Server checks `VINCache` table — if cached (decoded within 30 days), return cached result
4. If not cached: call primary VIN API (ClearVin or VehicleDatabases)
5. Map API response to `Vehicle` model fields
6. Store result in `VINCache` table with TTL
7. Return mapped spec object to client
8. Client populates form fields, highlights auto-filled fields in blue
9. All auto-populated fields remain editable

**Error handling:**

- VIN not found: show "VIN not recognized — please enter specifications manually"
- API timeout (>5s): show error, allow manual entry
- Rate limit hit: show error, fallback to NHTSA free API

---

### 9.2 AI Description Generation

**Trigger:** Admin clicks "Generate AI Description" on the vehicle form

**Flow:**

1. Collects all populated spec fields from the current form state
2. `POST /api/admin/vehicles/generate-description` with spec payload
3. Server constructs prompt:
   ```
   You are a luxury automotive copywriter. Write a compelling,
   SEO-optimised 180-220 word vehicle description for the following
   vehicle. Tone: premium, confident, buyer-focused.
   Vehicle: {specs JSON}
   Brokerage name: {settings.brokerageName}
   Location: {location.city}
   ```
4. Calls OpenAI GPT-4o (or configured AI provider)
5. Streams response back to client via Server-Sent Events or returns full text
6. Populates description textarea
7. Admin can regenerate or manually edit

---

### 9.3 Stripe Authorize & Capture

**Authorization (Reservation placement):**

1. Client calls `POST /api/reservations/create-intent`
2. Server creates Stripe `PaymentIntent` with `capture_method: 'manual'`
3. Server creates `Reservation` record with `status: PENDING`, stores `stripePaymentIntentId`
4. Client receives `client_secret`
5. Client calls `stripe.confirmCardPayment(clientSecret)` with Payment Element
6. Stripe confirms → webhook `payment_intent.amount_capturable_updated` fires
7. Webhook handler:
   - Updates reservation to `status: ACTIVE`, sets `authorisedAt`
   - Updates vehicle to `status: RESERVED`
   - Emits Socket.IO event `vehicle:status_changed`
   - Sends confirmation email to customer
   - Sends alert to admin/salesperson

**Capture (After physical settlement):**

1. Admin clicks "Capture Deposit" on reservation detail page
2. `POST /api/admin/reservations/[id]/capture` with optional `{ amount }`
3. Server calls `stripe.paymentIntents.capture(intentId, { amount_to_capture })`
4. On success: updates reservation `capturedAt`, `status: COMPLETED`
5. Creates or updates linked `Deal` record
6. Triggers accounting sync (logs transaction in Xero/QB)

**Release (Customer backs out):**

1. Admin clicks "Release Authorization"
2. `POST /api/admin/reservations/[id]/release` with `{ reason }`
3. Server calls `stripe.paymentIntents.cancel(intentId)`
4. Updates reservation `releasedAt`, `status: CANCELLED`
5. Updates vehicle back to `status: AVAILABLE`
6. Emits Socket.IO `vehicle:status_changed`
7. Sends release confirmation email to customer

**Webhook events handled:**

- `payment_intent.amount_capturable_updated` → reservation active
- `payment_intent.succeeded` → deposit captured
- `payment_intent.canceled` → reservation released
- `payment_intent.payment_failed` → notify admin, keep vehicle available

---

### 9.4 Commission Calculation Engine

**Triggered:** When a `Deal` is marked `CLOSED`

**Flow:**

1. Fetch salesperson's `CommissionPlan`
2. Compute `grossProfit = salePrice - purchaseCost - reconditioningCost - floorplanInterest - otherCosts`
3. Based on plan type:
   - **FLAT:** `amount = plan.flatAmount`
   - **PERCENTAGE:** `amount = grossProfit * plan.percentage`
   - **TIERED:** Find matching tier by `grossProfit`, apply that tier's rate
4. Create `Commission` record: `{ dealId, staffId, planId, grossProfit, rate, amount, status: PENDING }`
5. Notify salesperson via in-app notification and email

**Pay Run creation:**

1. Admin selects date range
2. System fetches all `Commission` records with `status: PENDING` in period
3. Groups by salesperson
4. Creates `PayRun` record with total amount and period
5. Admin approves → all included commissions updated to `APPROVED`
6. Export generates CSV: `Staff Name, Vehicle, Deal ID, Gross Profit, Rate, Payout`

---

### 9.5 Lead Routing Engine

**Triggered:** New `Lead` created via any source

**Flow:**

1. Fetch all active routing rules from `LeadRoutingRule` table, ordered by priority
2. Evaluate each rule condition against the lead:
   - Vehicle price range check
   - Vehicle body type check
   - Lead source check
   - Geographic ZIP/city check
3. First matching rule determines assignment
4. If no rule matches: round-robin assignment among all active salespersons
5. Round-robin state stored in `RoundRobinState` (tracks last assigned per group)
6. Update `Lead.assignedToId`
7. Send push notification + email to assigned salesperson
8. Start SLA timer: if lead not marked as contacted within `settings.slaThresholdMinutes`, trigger escalation

**Escalation flow:**

1. Cron job runs every 5 minutes
2. Fetches leads where `status: NEW` AND `createdAt < now - slaThreshold` AND `escalatedAt IS NULL`
3. Sends escalation alert to `settings.escalationRecipientId`
4. Updates `Lead.escalatedAt`
5. In-app notification to escalation recipient

---

### 9.6 Google Merchant Center Feed

**Endpoint:** `GET /api/feeds/google-merchant` (API key protected)

**Output format:** XML (application/xml)

**Required attributes per vehicle:**

```xml
<item>
  <id>{vehicle.vin}</id>
  <title>{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}</title>
  <link>https://{domain}/inventory/{vehicle.slug}</link>
  <image_link>{vehicle.heroImageCdnUrl}</image_link>
  <price>{vehicle.price} {vehicle.currency}</price>
  <condition>new</condition>  <!-- or "used" -->
  <brand>{vehicle.make}</brand>
  <vehicle_model>{vehicle.model}</vehicle_model>
  <vehicle_model_year>{vehicle.year}</vehicle_model_year>
  <mileage><value>{vehicle.mileage}</value><unit>MI</unit></mileage>
  <availability>in_stock</availability>  <!-- or "out_of_stock" if RESERVED -->
  <store_code>{location.googleStoreCode}</store_code>
</item>
```

**Compliance rules enforced programmatically:**

- Only vehicles with `condition: NEW` and `status: AVAILABLE` or `RESERVED` included
- Price in feed must exactly match `vehicle.price` in database
- Vehicles with missing hero image excluded with log entry
- Vehicles with `knownDamages` populated excluded
- Feed validates all required fields before output

---

### 9.7 Accounting Sync (Xero)

**On Deal close:**

1. Create Xero invoice with line items:
   - Vehicle sale (revenue account)
   - Trade-in (debit — inventory asset)
   - Doc fees (separate revenue line)
2. Create Xero bill for vehicle purchase cost (COGS)
3. Attach payment records matching Stripe deposit + offline payment
4. Record reconditioning costs as expenses against vehicle cost centre
5. Store Xero `invoiceId` in `Deal.accountingSyncId`

**VAT Margin Scheme:**

- If `vehicle.vatMarginEligible = true`:
  - `margin = salePrice - purchaseCost`
  - `vatDue = margin * (1/6)`
  - Post VAT to correct Xero VAT account
  - Standard VAT not applied to full sale price

**Error handling:**

- Failed sync: logged to `AccountingSyncLog` with error message
- Retry: manual "Force Sync" from admin settings
- Alert: email to `settings.accountingAlertEmail` on sync failure

---

## 10. API Routes & Endpoints

### 10.1 Public API

```
GET    /api/vehicles                    Paginated vehicle listing with filters
GET    /api/vehicles/[id]               Single vehicle by ID or slug
POST   /api/vehicles/[id]/view          Increment view count (fire-and-forget)
POST   /api/leads                       Submit enquiry/lead from public forms
POST   /api/leads/schedule-test-drive   Schedule test drive enquiry
POST   /api/trade-ins                   Submit trade-in valuation request
GET    /api/finance-calculator          (Client-side computed, no API needed)
POST   /api/reservations/create-intent  Create Stripe PaymentIntent for reservation
POST   /api/reservations/confirm        Confirm reservation after Stripe success
GET    /api/locations                   List all active locations
GET    /api/locations/[slug]            Single location data
GET    /api/feeds/google-merchant       XML feed (API key protected)
GET    /api/sitemap                     Dynamic sitemap XML
POST   /api/chat/message                AI chatbot message handler
POST   /api/webhooks/stripe             Stripe webhook receiver
```

### 10.2 Customer API (auth required)

```
GET    /api/account/profile             Get customer profile
PATCH  /api/account/profile             Update customer profile
GET    /api/account/reservations        Customer's reservations
GET    /api/account/enquiries           Customer's enquiry history
POST   /api/account/privacy/delete      Submit data deletion request
PATCH  /api/account/privacy/consent     Update marketing consent
```

### 10.3 Admin API (auth + role required)

```
# Vehicles
GET    /api/admin/vehicles              Admin vehicle list (all statuses)
POST   /api/admin/vehicles              Create vehicle
GET    /api/admin/vehicles/[id]         Get vehicle
PATCH  /api/admin/vehicles/[id]         Update vehicle
DELETE /api/admin/vehicles/[id]         Delete vehicle
POST   /api/admin/vehicles/decode-vin   VIN decode
POST   /api/admin/vehicles/generate-description  AI description
PATCH  /api/admin/vehicles/[id]/status  Quick status change
POST   /api/admin/vehicles/[id]/media   Upload media
DELETE /api/admin/vehicles/[id]/media/[mediaId]  Delete media
PATCH  /api/admin/vehicles/[id]/media/reorder    Reorder media

# Leads
GET    /api/admin/leads                 List leads (with filters)
GET    /api/admin/leads/[id]            Lead detail
PATCH  /api/admin/leads/[id]            Update lead (status, assignee)
POST   /api/admin/leads/[id]/notes      Add note to lead
POST   /api/admin/leads/[id]/contact    Log a communication

# Reservations
GET    /api/admin/reservations          List reservations
GET    /api/admin/reservations/[id]     Reservation detail
POST   /api/admin/reservations/[id]/capture   Capture deposit
POST   /api/admin/reservations/[id]/release   Release authorization
POST   /api/admin/reservations/[id]/settlement Log offline payment
POST   /api/admin/reservations/[id]/contract  Upload contract

# Deals
GET    /api/admin/deals                 List deals
GET    /api/admin/deals/[id]            Deal detail
PATCH  /api/admin/deals/[id]            Update deal
POST   /api/admin/deals/[id]/close      Close deal (triggers commission calc)
POST   /api/admin/deals/[id]/sync       Force accounting sync

# Customers
GET    /api/admin/customers             List customers
GET    /api/admin/customers/[id]        Customer profile
PATCH  /api/admin/customers/[id]        Update customer
POST   /api/admin/customers/[id]/delete Process GDPR deletion

# Staff
GET    /api/admin/staff                 List staff
POST   /api/admin/staff                 Create staff
GET    /api/admin/staff/[id]            Staff detail
PATCH  /api/admin/staff/[id]            Update staff
DELETE /api/admin/staff/[id]            Deactivate staff

# Commissions
GET    /api/admin/commissions           Commission ledger
GET    /api/admin/commissions/pay-runs  Pay run list
POST   /api/admin/commissions/pay-runs  Create pay run
POST   /api/admin/commissions/pay-runs/[id]/approve  Approve pay run
GET    /api/admin/commissions/pay-runs/[id]/export   CSV export

# Finance
GET    /api/admin/finance/overview      KPI data for finance page
GET    /api/admin/finance/transactions  Stripe transaction list
POST   /api/admin/finance/sync          Trigger accounting sync
GET    /api/admin/finance/vat           VAT margin data

# Analytics
GET    /api/admin/analytics/overview    Platform analytics
GET    /api/admin/analytics/inventory   Per-vehicle analytics

# Settings
GET    /api/admin/settings              All settings
PATCH  /api/admin/settings/general      Update general settings
PATCH  /api/admin/settings/notifications Update notification rules
PATCH  /api/admin/settings/payment      Update payment settings
POST   /api/admin/settings/accounting/connect   OAuth connect to Xero/QB
DELETE /api/admin/settings/accounting/disconnect Disconnect accounting
POST   /api/admin/settings/commission-plans     Create commission plan
PATCH  /api/admin/settings/commission-plans/[id] Update plan
DELETE /api/admin/settings/commission-plans/[id] Delete plan
GET    /api/admin/settings/lead-routing  Get routing rules
POST   /api/admin/settings/lead-routing  Create rule
PATCH  /api/admin/settings/lead-routing/[id] Update rule
DELETE /api/admin/settings/lead-routing/[id] Delete rule
PATCH  /api/admin/settings/lead-routing/reorder  Reorder rules

# GDPR
GET    /api/admin/gdpr/requests         List GDPR requests
POST   /api/admin/gdpr/requests/[id]/process  Process deletion
GET    /api/admin/gdpr/consent-log      Consent event log
```

---

## 11. Third-Party Integrations

### 11.1 Stripe

- **SDK:** `stripe` (Node.js) + `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **Keys:** `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`
- **Features used:** PaymentIntents (manual capture), webhooks, overcapture
- **Webhook endpoint:** `/api/webhooks/stripe` — verified with `stripe.webhooks.constructEvent()`

### 11.2 VIN Decoder

- **Primary:** ClearVin API or VehicleDatabases API
- **Fallback:** NHTSA free API (`https://vpic.nhtsa.dot.gov/api/`)
- **Env vars:** `VIN_API_KEY`, `VIN_API_URL`
- **Caching:** Results stored in `VINCache` Prisma model with 30-day TTL

### 11.3 AI Description Generation

- **Provider:** OpenAI GPT-4o
- **SDK:** `openai` npm package
- **Env vars:** `OPENAI_API_KEY`
- **Model:** `gpt-4o` with `max_tokens: 400`
- **Prompt:** Structured prompt injecting all vehicle specs and brokerage brand tone

### 11.4 360° Virtual Tours

- **Providers:** CloudPano (primary), 3DVista (advanced)
- **Integration:** iframe embed with `src` URL from `VehicleMedia.url` where `type: TOUR_360`
- **Hotspots:** Stored as JSON array in vehicle record, rendered as absolutely-positioned overlay elements

### 11.5 Xero (Accounting)

- **SDK:** `xero-node`
- **Auth:** OAuth 2.0 — admin connects via OAuth flow in settings
- **Env vars:** `XERO_CLIENT_ID`, `XERO_CLIENT_SECRET`, `XERO_REDIRECT_URI`
- **Tokens:** Stored encrypted in database settings record
- **Features:** Create invoices, bills, payments, account mapping

### 11.6 Resend (Email)

- **SDK:** `resend`
- **Templates:** Built with `@react-email/components`
- **Env vars:** `RESEND_API_KEY`, `RESEND_FROM_EMAIL`
- **Templates required:**
  - `WelcomeEmail` — new customer registration
  - `ReservationConfirmationEmail` — customer deposit placed
  - `ReservationReleasedEmail` — deposit released
  - `EnquiryReceivedEmail` — lead submitted confirmation
  - `LeadAlertEmail` — salesperson new lead notification
  - `SLABreachEmail` — escalation alert
  - `CommissionStatementEmail` — salesperson pay run summary
  - `PasswordResetEmail` — auth reset link
  - `TestDriveConfirmationEmail`

### 11.7 Africa's Talking / Twilio (SMS)

- **Use cases:** Lead assignment alerts to salespersons, SLA escalation alerts
- **Env vars:** `SMS_PROVIDER`, `SMS_API_KEY`, `SMS_SENDER_ID`
- **Abstracted:** Behind a `sendSMS(to, message)` utility function for easy provider swap

### 11.8 WhatsApp Business API

- **Provider:** Official WhatsApp Business Cloud API (Meta)
- **Env vars:** `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_VERIFY_TOKEN`
- **Webhook:** `/api/webhooks/whatsapp` — handles incoming messages
- **Outbound:** Template messages for lead follow-ups
- **Inbound:** Stored in `Communication` table, pushed to admin dashboard via Socket.IO

### 11.9 Google APIs

- **Maps Embed API:** For location pages — `GOOGLE_MAPS_API_KEY`
- **Google OAuth:** For customer sign-in — `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- **Merchant Center Feed:** Output via `/api/feeds/google-merchant`, submitted manually to GMC

### 11.10 File Storage

- **Provider:** Cloudflare R2 (S3-compatible) or Uploadthing
- **Env vars:** `R2_ACCOUNT_ID`, `R2_ACCESS_KEY`, `R2_SECRET_KEY`, `R2_BUCKET_NAME`, `R2_PUBLIC_URL`
- **Usage:** All vehicle photos, videos, and documents stored in R2; CDN URL saved in database
- **Max file sizes enforced server-side:** Photos 10MB, Videos 500MB, Documents 20MB

### 11.11 Socket.IO Server

- **Runtime:** Separate Node.js process (Express + Socket.IO)
- **Port:** `3001` (configurable)
- **Env vars:** `SOCKET_SERVER_URL`, `SOCKET_SECRET`
- **Authentication:** JWT token passed as Socket.IO handshake auth, validated against NextAuth secret
- **Events emitted by Next.js server:** Via HTTP call to Socket.IO server endpoint
- **Events:**

| Event                    | Payload                        | Direction              |
| ------------------------ | ------------------------------ | ---------------------- |
| `vehicle:status_changed` | `{ vehicleId, newStatus }`     | Server → All clients   |
| `lead:assigned`          | `{ leadId, staffId }`          | Server → Staff client  |
| `lead:sla_breach`        | `{ leadId }`                   | Server → Admin clients |
| `reservation:new`        | `{ reservationId, vehicleId }` | Server → Admin clients |
| `notification:new`       | `{ notification }`             | Server → Target user   |
| `chat:message`           | `{ message, sessionId }`       | Bidirectional          |

---

## 12. SEO & Structured Data Requirements

### 12.1 Vehicle Detail Page — Car Schema (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Car",
  "name": "{year} {make} {model} {trim}",
  "brand": { "@type": "Brand", "name": "{make}" },
  "model": "{model}",
  "modelDate": "{year}",
  "vehicleConfiguration": "{trim}",
  "vehicleIdentificationNumber": "{vin}",
  "mileageFromOdometer": {
    "@type": "QuantitativeValue",
    "value": "{mileage}",
    "unitCode": "SMI"
  },
  "vehicleEngine": {
    "@type": "EngineSpecification",
    "engineType": "{fuelType}",
    "engineDisplacement": {
      "@type": "QuantitativeValue",
      "value": "{engineSize}",
      "unitCode": "LTR"
    }
  },
  "fuelType": "{fuelType}",
  "driveWheelConfiguration": "{drivetrain}",
  "numberOfDoors": "{doors}",
  "vehicleSeatingCapacity": "{seats}",
  "color": "{color}",
  "itemCondition": "https://schema.org/NewCondition",
  "knownVehicleDamages": "{knownDamages or 'None'}",
  "accelerationTime": {
    "@type": "QuantitativeValue",
    "value": "{accelerationSec}",
    "unitCode": "SEC"
  },
  "offers": {
    "@type": "Offer",
    "price": "{price}",
    "priceCurrency": "{currency}",
    "availability": "https://schema.org/InStock",
    "url": "https://{domain}/inventory/{slug}",
    "seller": {
      "@type": "AutoDealer",
      "name": "{brokerageName}",
      "address": "{address}"
    }
  },
  "image": ["{heroImageUrl}", "...additional images"],
  "description": "{aiDescription}",
  "url": "https://{domain}/inventory/{slug}"
}
```

### 12.2 Homepage — Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "{brokerageName}",
  "url": "https://{domain}",
  "logo": "https://{domain}/logo.png",
  "telephone": "{phone}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{address}",
    "addressLocality": "{city}",
    "addressCountry": "{country}"
  },
  "openingHours": ["Mo-Fr 09:00-17:00", "Sa 09:00-13:00"],
  "sameAs": ["{facebookUrl}", "{instagramUrl}", "{linkedinUrl}"]
}
```

### 12.3 Location Pages — LocalBusiness Schema

```json
{
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "{brokerageName} {city}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{location.address}",
    "addressLocality": "{location.city}",
    "addressRegion": "{location.region}",
    "addressCountry": "{location.country}"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "{location.lat}",
    "longitude": "{location.lng}"
  },
  "openingHoursSpecification": "...",
  "telephone": "{location.phone}"
}
```

### 12.4 Open Graph Tags (All VDP pages)

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="{year} {make} {model} | {brokerageName}" />
<meta property="og:description" content="{first 155 chars of description}" />
<meta property="og:image" content="{heroImageCdnUrl}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://{domain}/inventory/{slug}" />
<meta property="og:site_name" content="{brokerageName}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{year} {make} {model} | {brokerageName}" />
<meta name="twitter:description" content="{first 155 chars}" />
<meta name="twitter:image" content="{heroImageCdnUrl}" />
```

---

## 13. Payment Architecture

### 13.1 Environment Variables Required

```env
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

### 13.2 PaymentIntent Creation

```typescript
const paymentIntent = await stripe.paymentIntents.create({
  amount: depositAmountCents, // in smallest currency unit
  currency: "usd",
  capture_method: "manual", // CRITICAL: do not auto-capture
  metadata: {
    vehicleId: vehicle.id,
    vehicleVin: vehicle.vin,
    customerId: customer.id,
    reservationId: reservation.id,
  },
  description: `Reservation deposit: ${vehicle.year} ${vehicle.make} ${vehicle.model}`,
});
```

### 13.3 Overcapture Logic

- Allowed by card networks for up to 15% above original authorization (card-type dependent)
- Enforce max overage server-side: `captureAmount <= authorizedAmount * 1.15`
- If requested capture exceeds limit: reject with validation error and explanation

### 13.4 Authorization Expiry

- Stripe authorizations expire after 7 days by default (varies by card network)
- A scheduled cron job runs daily: finds `Reservation` with `status: ACTIVE` and `expiresAt < now`
- Sends reminder email to customer and admin 48 hours before expiry
- On expiry: updates reservation to `EXPIRED`, vehicle back to `AVAILABLE`

---

## 14. Real-Time Requirements

### 14.1 Socket.IO Server

- Runs as a separate Express + Socket.IO Node.js process
- Authentication: client sends JWT as `socket.auth.token` on connect
- Server validates token on `connection` event; disconnects invalid clients
- Rooms: `vehicle:{vehicleId}`, `admin`, `staff:{staffId}`, `user:{userId}`

### 14.2 Next.js → Socket.IO Communication

- Next.js server actions/API routes emit events by calling the Socket.IO server's internal HTTP API:

```typescript
await fetch(`${process.env.SOCKET_SERVER_URL}/emit`, {
  method: "POST",
  headers: { Authorization: `Bearer ${process.env.SOCKET_SECRET}` },
  body: JSON.stringify({
    room: `vehicle:${vehicleId}`,
    event: "vehicle:status_changed",
    data: { vehicleId, newStatus },
  }),
});
```

### 14.3 Client-Side Socket Connection

- Socket connection initialized in a `SocketProvider` React context
- Connected on mount if user is authenticated
- Joined to appropriate rooms based on user role
- `vehicle:status_changed` event updates TanStack Query cache for that vehicle
- `notification:new` event increments notification bell count and shows toast

---

## 15. Performance Requirements

| Metric                         | Target  | Measurement               |
| ------------------------------ | ------- | ------------------------- |
| Largest Contentful Paint (LCP) | < 2.5s  | Google PageSpeed Insights |
| First Input Delay (FID)        | < 100ms | Core Web Vitals           |
| Cumulative Layout Shift (CLS)  | < 0.1   | Core Web Vitals           |
| Time to First Byte (TTFB)      | < 800ms | Lighthouse                |
| Admin dashboard initial load   | < 3s    | Manual testing            |
| VDP page load (mobile 4G)      | < 3s    | WebPageTest               |
| 360 tour initial load          | < 5s    | Manual testing            |
| API response times (p95)       | < 500ms | Server monitoring         |
| Database query time (p95)      | < 100ms | Prisma query logging      |

**Implementation requirements:**

- All vehicle images served via CDN with WebP format and Next.js `<Image>` component
- Video assets lazy-loaded with `loading="lazy"` and poster image
- 360 tour iframe loaded only when tab/section is in viewport (IntersectionObserver)
- Admin charts use dynamic imports with `next/dynamic` and `{ ssr: false }`
- Prisma queries use `select` to return only required fields — never `findMany()` without field selection
- All list pages paginated — no unbounded queries
- Database indices on: `Vehicle.status`, `Vehicle.slug`, `Lead.assignedToId`, `Lead.status`, `Reservation.stripePaymentIntentId`

---

## 16. Security Requirements

### 16.1 Authentication Security

- Passwords hashed with bcrypt (salt rounds: 12)
- Admin login rate-limited: 10 attempts per IP per 15 minutes (Upstash Redis)
- JWT tokens: 24-hour access token, 30-day refresh token
- All auth cookies: `httpOnly: true`, `secure: true`, `sameSite: 'lax'`
- CSRF protection: enabled via NextAuth built-in CSRF token

### 16.2 API Security

- All admin API routes validate session on every request via `auth()` wrapper
- Role checked against required permission before any data access or mutation
- All user inputs validated with Zod schemas server-side — never trust client data
- SQL injection: impossible via Prisma's parameterized queries
- File upload validation: MIME type check server-side (not just extension), max size enforced
- Stripe webhook signature verified via `stripe.webhooks.constructEvent()` — no verification = 400 rejection

### 16.3 Data Security

- Database credentials never in codebase — environment variables only
- All environment variables documented in `.env.example` (no real values)
- Stripe card data never touches brokerage servers — Stripe Elements tokenizes client-side
- Customer ID documents referenced by ID only — not stored in database
- Sensitive vehicle cost fields (`purchaseCost`, `floorplanInterest`) excluded from all public API responses via Prisma `select`
- `AuditLog` written for all destructive admin actions (delete, capture, release, role change)

### 16.4 Infrastructure Security

- All traffic over HTTPS — HTTP redirected to HTTPS
- Content Security Policy headers configured in `next.config.js`
- `X-Frame-Options: DENY` on all non-iframe-intentional pages
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

---

## 17. Compliance Requirements

### 17.1 GDPR (EU customers)

- Explicit opt-in consent required before marketing communications — no pre-ticked boxes
- Consent timestamp and IP stored in `Customer.consentDate` and audit log
- "Do Not Sell or Share My Personal Information" link in every page footer
- Right to be Forgotten: data deletion within 30 days of request, covering:
  - `Customer` record soft-deleted (`deletedAt` set)
  - `Lead` records anonymized (name, email, phone replaced with `[DELETED]`)
  - `Communication` records anonymized
  - Stripe customer data deletion requested via Stripe API
  - Marketing platform subscription cancelled
- Data portability: customer can request export of their data (v2 feature)
- Privacy Policy must be versioned — when updated, customers re-consented on next login

### 17.2 PCI DSS

- No raw card numbers, CVVs, or full PANs ever stored on brokerage servers
- Stripe Elements used exclusively — card data goes directly to Stripe's servers
- Stripe webhook verified to prevent spoofed payment events
- TLS 1.2+ enforced for all connections
- Annual PCI DSS Self-Assessment Questionnaire A (SAQ-A) applicable — document and retain

### 17.3 FTC Advertising Compliance

- All advertised prices include all mandatory non-government fees
- No bait-and-switch: price in Google feed must exactly match price on VDP
- Optional F&I products (warranties, GAP) displayed with explicit opt-in only
- Finance calculator disclaimer: "Estimate only — not a credit offer"
- All testimonials: genuine customers only, no fabricated reviews

### 17.4 CCPA (California customers)

- "Do Not Sell or Share" link functional and processes opt-out within 15 days
- Consumer rights notice displayed prominently in privacy policy
- Opt-out state persisted in `Customer` record and respected in all marketing sends

---

## 18. Non-Functional Requirements

### 18.1 Availability

- Target uptime: 99.9% (< 8.7 hours downtime per year)
- Deploy on Vercel (Next.js) with automatic failover
- Socket.IO server on Railway or Render with auto-restart
- Database: Managed PostgreSQL (Supabase, Neon, or Railway) with daily backups

### 18.2 Scalability

- Next.js serverless functions auto-scale on Vercel
- Database connection pooling via PgBouncer or Prisma Accelerate
- File storage on Cloudflare R2 — unlimited scale
- Socket.IO server: single instance sufficient for < 10,000 concurrent users; horizontal scaling with Redis adapter for larger scale

### 18.3 Browser Support

- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Mobile: iOS Safari 14+, Android Chrome 90+
- IE11: not supported

### 18.4 Accessibility

- WCAG 2.1 AA compliance
- All images: `alt` attributes required (enforced in `VehicleMedia` upload)
- All forms: labels associated with inputs
- Focus management in modals and drawers
- Keyboard navigation for all interactive elements
- Colour contrast ratio ≥ 4.5:1 for body text

### 18.5 Internationalisation (i18n)

- v1: English only
- v2 (future): `next-intl` package, bilingual support (English + additional language per client requirement)
- Currency display: locale-aware via `Intl.NumberFormat`
- Date/time display: locale-aware via `Intl.DateTimeFormat`

### 18.6 Testing Requirements

| Test Type         | Tool                           | Coverage Target                                                                 |
| ----------------- | ------------------------------ | ------------------------------------------------------------------------------- |
| Unit tests        | Vitest                         | Core business logic functions (commission calc, VIN validation, routing engine) |
| Component tests   | Vitest + React Testing Library | All shared UI primitives                                                        |
| Integration tests | Vitest                         | All API route handlers                                                          |
| E2E tests         | Playwright                     | Critical paths: reservation flow, lead submission, admin vehicle creation       |
| Stripe tests      | Stripe test mode + webhooks    | Full payment lifecycle                                                          |

---

## 19. Environment & Deployment

### 19.1 Environment Variables

```env
# App
NEXTAUTH_URL=https://domain.com
NEXTAUTH_SECRET=...
NEXT_PUBLIC_APP_URL=https://domain.com

# Database
DATABASE_URL=postgresql://...

# Auth Providers
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# VIN Decoder
VIN_API_KEY=...
VIN_API_URL=https://...

# OpenAI
OPENAI_API_KEY=sk-...

# Resend Email
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=noreply@domain.com

# SMS
SMS_PROVIDER=africastalking  # or twilio
SMS_API_KEY=...
SMS_SENDER_ID=...

# WhatsApp
WHATSAPP_PHONE_NUMBER_ID=...
WHATSAPP_ACCESS_TOKEN=...
WHATSAPP_VERIFY_TOKEN=...

# File Storage (Cloudflare R2)
R2_ACCOUNT_ID=...
R2_ACCESS_KEY=...
R2_SECRET_KEY=...
R2_BUCKET_NAME=...
R2_PUBLIC_URL=https://cdn.domain.com

# Xero
XERO_CLIENT_ID=...
XERO_CLIENT_SECRET=...
XERO_REDIRECT_URI=https://domain.com/api/admin/settings/accounting/callback

# Socket.IO Server
SOCKET_SERVER_URL=https://socket.domain.com
SOCKET_SECRET=...

# Redis (for rate limiting + session)
REDIS_URL=redis://...

# Google
GOOGLE_MAPS_API_KEY=...

# Feature Flags
ENABLE_WHATSAPP=true
ENABLE_XERO=true
ENABLE_AI_DESCRIPTIONS=true
```

### 19.2 Deployment Architecture

```
Vercel
└── Next.js App (web)
    ├── Public routes (SSR/ISR)
    ├── Admin routes (CSR, server-gated)
    └── API routes (serverless functions)

Railway / Render
└── Socket.IO Server (Node.js, always-on)

Cloudflare
├── R2 (file storage)
├── CDN (asset delivery)
└── DNS + SSL

Supabase / Neon
└── PostgreSQL database + PgBouncer

Upstash
└── Redis (rate limiting, caching)
```

### 19.3 CI/CD

- GitHub Actions pipeline:
  1. `lint` — ESLint + Prettier check
  2. `type-check` — `tsc --noEmit`
  3. `test` — Vitest unit + integration tests
  4. `build` — `next build` verification
  5. On merge to `main`: auto-deploy to Vercel production
  6. On PR: deploy to Vercel preview environment
- Prisma migrations run via `prisma migrate deploy` in CI before deploy

---

## 20. Developer Conventions

### 20.1 Naming Conventions

- Files: `kebab-case.tsx`
- Components: `PascalCase`
- Functions/variables: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE`
- Database models: `PascalCase` (Prisma convention)
- API routes: `kebab-case` URL segments
- Environment variables: `SCREAMING_SNAKE_CASE`

### 20.2 Folder Conventions

```
/components/ui/          — Shared primitives (Button, Input, Modal, etc.)
/components/public/      — Public-facing page sections and page-specific components
/components/admin/       — Admin dashboard components
/app/(public)/           — Public Next.js routes (layout has Header + Footer)
/app/(admin)/            — Admin Next.js routes (layout has AdminSidebar + AdminTopbar)
/app/api/                — API route handlers
/lib/                    — Utility functions, API clients, helpers
/lib/stripe.ts           — Stripe client singleton
/lib/prisma.ts           — Prisma client singleton
/lib/auth.ts             — NextAuth config
/lib/mailer.ts           — Resend email utility
/lib/sms.ts              — SMS utility
/hooks/                  — Custom React hooks (useDebounce, useSocket, useVehicles, etc.)
/stores/                 — Zustand stores (useNotificationStore, useFilterStore, etc.)
/types/                  — TypeScript type definitions not in Prisma
```

### 20.3 API Route Conventions

Every API route handler must:

1. Validate session (public routes: skip, customer routes: `CUSTOMER` role, admin routes: required `StaffRole`)
2. Parse and validate input with Zod schema — return `400` with validation errors on failure
3. Execute business logic
4. Return consistent JSON response shape:

```typescript
// Success
{ success: true, data: T }
// Error
{ success: false, error: string, details?: ZodIssue[] }
```

5. Write to `AuditLog` for all mutating admin actions
6. Catch all errors and return `500` with generic message (never expose stack traces)

### 20.4 Error Handling

- All server actions and API routes wrapped in `try/catch`
- Errors logged to console in development, to a logging service (Axiom / Sentry) in production
- Never expose internal error messages or stack traces to client
- Prisma `PrismaClientKnownRequestError` with code `P2002` = unique constraint → return `409 Conflict`
- Prisma `PrismaClientKnownRequestError` with code `P2025` = record not found → return `404 Not Found`

### 20.5 Code Quality Rules

- No `any` types in TypeScript — use `unknown` and narrow, or define a proper type
- All Prisma queries use `select` to return only required fields
- No inline styles — Tailwind classes only
- All user-facing strings: ready for i18n extraction (use string variables, not inline literals)
- All async operations properly awaited — no fire-and-forget except view count increment
- No business logic in React components — keep components as pure UI, logic in hooks or server actions

---

_End of Product Requirements Document_

_Version 1.0 — GTSS – Great Thumbs Software Solutions — 2026_
