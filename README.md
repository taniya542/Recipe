# RecipeSearcher 🍳📖

RecipeSearcher is a web application that helps users find recipes based on the ingredients they have on hand. It uses AI to suggest recipes, leveraging the Hugging Face Inference API for intelligent recipe generation.

---

## Features ✨
- 🥕 Input a list of ingredients and get recipe suggestions.
- 🤖 AI-powered recipe generation using the Hugging Face Inference API.
- 📄 Recipes formatted in Markdown for easy rendering.

---

## Technologies Used 🛠️
- **Frontend**: React, Vite, Bun 
- **Backend**: Hugging Face Inference API
- **Language**: JavaScript

---

## Setup Instructions 🖥️

### Prerequisites ✅
1. **Node.js** (version 16 or above)
2. **npm**, **yarn**, or **bun**
3. A valid Hugging Face API token

### Steps to Run the Project 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipesearcher.git
   cd recipesearcher
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Create a `.env` file in the root of the project:
   ```env
   VITE_HF_ACCESS_TOKEN=your_hugging_face_token
   ```
   **Note**: Replace `your_hugging_face_token` with your actual Hugging Face API token.

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

---



---

## Usage 🧑‍🍳
1. 📝 Enter the ingredients you have into the input form.
2. 🎯 Click the "Get Recipe" button.
3. 🍲 View the AI-generated recipe suggestion.

---



