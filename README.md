# ItemListManagerHackerrank

## 🧪 Practice Challenge: Item List Manager

### 📝 Problem Statement

You are tasked with creating a simple application called **Item List Manager** that displays a list of items and allows users to add new items to the list.

The items are displayed in an unordered list (`<ul>`), and users can add new items using an input field and a button.

![Item List Manager Demo](https://s3.amazonaws.com/hr-assets/0/1719046513-25632d1299-hrc-idea-manager-list-animation.gif)

---

### ✅ Detailed Requirements

1. When the application loads, it should display an empty list.
2. The input field should accept user text input.
3. When the **Add Item** button is clicked:
   - The text from the input field should be added to the list.
   - The input field should be cleared.
4. If the input field is empty and the button is clicked, nothing should be added to the list.

---

### 🔁 Sample Interaction

#### Initial State
- The list is empty.
- The input field is empty.

#### User Action 1
- User types **"First Item"** in the input field.
- User clicks **Add Item**.
- The list displays:
  - First Item

#### User Action 2
- User types **"Second Item"** in the input field.
- User clicks **Add Item**.
- The list displays:
  - First Item
  - Second Item
