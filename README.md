
This is a backend service built for Formi's SDE Assignment. It helps the tele-calling team of **Moustache Escapes** to quickly locate the nearest hotel properties based on a user's location query, including support for minor spelling mistakes.

## ✨ Features

- ✉️ **Fuzzy Matching**: Corrects user typos using `fuse.js` (e.g., `delih` → `Delhi`).
- 📍 **Geolocation**: Uses Nominatim (OpenStreetMap) to convert city/state names to lat/lng.
- ⌚ **Fast Performance**: API responds in under 2 seconds, ideal for real-time use.
- ✅ Returns nearby Moustache properties within a **50KM radius** or states if none are found.

---

## 📁 Project Structure

```
backend/
├── package.json
├── server.js
├── routes/
│   └── nearestProperties.js
└── utils/
    ├── fuzzy.js
    └── haversine.js
```

- **server.js**: Initializes Express server and routes
- **routes/nearestProperties.js**: POST endpoint logic for handling location search
- **utils/fuzzy.js**: Contains fuzzy matching logic
- **utils/haversine.js**: Calculates distances between coordinates

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone <repo-url>
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. **Run the server**

```bash
node server.js
```

Server runs at: `http://localhost:3000`

---

## 📢 API Usage

### Endpoint:

```
POST /nearest-properties
```

### Headers:

```
Content-Type: application/json
```

### Request Body:

```json
{
  "query": "delih"
}
```

### Successful Response:

```json
{
  "location": "Delhi, India",
  "nearby_properties": [
    {
      "name": "Moustache Delhi",
      "distance_km": 1.23
    }
  ]
}
```

### If no nearby properties:

```json
{
  "message": "No properties within 50KM radius"
}
```

### If location not found:

```json
{
  "message": "Location not found"
}
```

---

## 📊 Testing with Postman

1. Open Postman
2. Set method to `POST`
3. URL: `http://localhost:3000/nearest-properties`
4. Go to **Body** > **raw** > choose **JSON**
5. Enter:

```json
{
  "query": "bangalre"
}
```

6. Hit **Send**

---

## ❓ Notes

- This app does **not use Dijkstra's Algorithm**, as it's not a graph-based shortest path problem. Instead, it directly calculates distances using the **Haversine formula**.
- Fuzzy matching ensures minor typos are handled gracefully to help the tele-caller.
- Extend the `knownLocations` in `utils/fuzzy.js` as needed for better coverage.

---

## 💪 Tech Stack

- **Node.js**
- **Express.js**
- **fuse.js** (fuzzy search)
- **Axios** (for geocoding requests)
- **Haversine formula** (distance calculation)
- **Nominatim API** (OpenStreetMap geocoder)

