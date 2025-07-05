# Car Search

A responsive frontend application that allows users to search, filter, and sort available vehicles by ZIP code.  
Built with **React**, **TypeScript**, and **Tailwind CSS**.

---

##  Features

**ZIP Code Search**  
- Enter a ZIP code to find available vehicles in that area.

 **Filtering**  
- Filter vehicles by **Make** and **Color**.

 **Sorting**  
- Sort results by **Price**, **Year**, or **Mileage**.

**Vehicle Details**  
- Each vehicle displays: Make, Model, Trim, Year, Color, Mileage, Price, and an Image.

 **Responsive UI**  
- Mobile-friendly design built with Tailwind CSS.

 **Error Handling**  
- Handles invalid or missing ZIP codes and empty search results gracefully.

---

## Tech Stack

- **React** + **TypeScript**  
-  **Tailwind CSS** for styling  
-  No backend — uses hardcoded vehicle data

---

## Installation & Running

```bash
# Clone the repository
git clone https://github.com/your-username/car-search.git
cd car-search

# Install dependencies
npm install

# Run the development server
npm run dev


src/
├── components/
│   ├── Header.tsx
│   ├── SearchForm.tsx
│   ├── Filters.tsx
│   └── Results.tsx
├── hooks/
│   └── useVehicles.ts
├── data/
│   └── vehicles.ts
├── App.tsx
└── main.tsx
```
