# Product Order List Application

## Description

This Angular application allows users to manage a list of products with their quantities. It features an interactive interface where users can add products, specify quantities, and view their orders. The application also supports voice feedback to read out the order list.

## Features

- Add products with specified quantities.
- Display a dynamic list of selected products.
- Show the order list in a formatted table.
- Voice feedback to read out the order list.

## Technologies Used

- **Angular**: Framework for building the application.
- **CSS**: Styling for a modern and polished look.
- **HTML**: Structure of the web pages.
- **Voice RSS API** (or another text-to-speech service): Provides voice feedback for the order list.


## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/product-order-list.git
cd product-order-list
npm install
ng serve



### 5. **Usage**

Explain how to use the application once it's up and running.

```markdown
## Usage

1. **Add Products**: Use the dropdown to select a product and specify the quantity. Click "Add" to include it in the list.
2. **View Order**: Click "Show Order" to display the current list of selected products and their quantities.
3. **Voice Feedback**: Click "What is my Order?" to have the application read out the order list.

## Configuration

1. **Obtain a Voice RSS API Key** from [Voice RSS](https://voicerss.org/) or another text-to-speech service.
2. **Replace `YOUR_API_KEY`** in the `src/app/app.component.ts` file with your actual API key.

   ```typescript
   private apiKey = 'YOUR_API_KEY'; // Replace with your API key

