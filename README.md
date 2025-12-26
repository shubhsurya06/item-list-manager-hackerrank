
# Item List Manager – Hackerrank

### 📝 Problem Statement

You are tasked with creating a simple application called **Item List Manager** that displays a list of items and allows users to add new items to the list.

The items are displayed in an unordered list (`<ul>`), and users can add new items using an input field and a button.

<img width="416" height="250" alt="initialItem" src="https://github.com/user-attachments/assets/2d656912-d58f-4bcf-9efc-2606c36e1b5f" />

---

## ✅ Core Requirements

1. When the application loads, it should display an empty list.
2. The input field should accept user text input.
3. When the **Add Item** button is clicked:

   * The text from the input field should be added to the list.
   * The input field should be cleared.
4. If the input field is empty and the button is clicked, nothing should be added to the list.

---

## 🔁 Sample Interaction

### Initial State

* The list is empty.
* The input field is empty.

### User Action 1

* User types **"First Item"** in the input field.
* User clicks **Add Item**.
* The list displays:

  * First Item

### User Action 2

* User types **"Second Item"** in the input field.
* User clicks **Add Item**.
* The list displays:

  * First Item
  * Second Item
  * 
<img width="420" height="350" alt="addedItems" src="https://github.com/user-attachments/assets/f96e12fa-6c74-4475-b71f-a9e72e2c6605" />

---

## ⭐ Extra Functionality (Enhancements)

In addition to the core requirements, the application includes the following **additional features**:

### ☑️ Toggle Item Completion

* Each item includes a checkbox.
* Clicking the checkbox toggles the completion status of the item.
* Completed items are visually distinguished (e.g., text strike-through).

  <img width="417" height="349" alt="toggleItem" src="https://github.com/user-attachments/assets/5c2aea13-7b44-457a-bc21-9d19b767b4bb" />


### ✏️ Edit Item

* Users can edit an existing item’s text.
* The updated text is immediately reflected in the list.

  <img width="419" height="351" alt="editItem" src="https://github.com/user-attachments/assets/8c2168f4-3b21-4116-b30d-af053a97d700" />


### 🗑️ Delete Item

* Users can remove an item from the list.
* Deleting an item updates the list instantly.

---

## 🎨 Visual Status Indicator (Custom Directive)

To enhance usability and provide clear visual feedback, the application uses a **custom Angular attribute directive** to dynamically change the background color of each item based on its completion status.

<img width="460" height="384" alt="image" src="https://github.com/user-attachments/assets/2eb35a15-5e54-4439-8cdd-8cafcb3b8091" />

### 🧩 Directive Behavior

* A custom directive is applied to each list item.
* The directive listens to the item’s `isCompleted` state.
* Whenever the checkbox is toggled, the background color updates automatically.

### 🎯 Background Color Rules

* **Completed Item**

  * Background color:
    `rgb(249, 154, 154)`
    *(Light red – indicates completed task)*

* **Incomplete Item**

  * Background color:
    `#93e793`
    *(Light green – indicates active/incomplete task)*

### 🛠️ Implementation Notes

* The directive reacts to changes in the completion state without manual DOM manipulation.
* It keeps the template clean and improves separation of concerns.
* This approach enhances accessibility and visual clarity for users managing multiple items.

This directive-driven styling ensures that item status is immediately recognizable at a glance, improving overall user experience.

---

## 🛠️ Technical Notes

* The application is built using **Angular (Standalone Components)**.
* **NgRx Store** is used for state management.
* State updates are handled immutably via reducers (no direct mutation).
* No NgRx Effects are used; all logic is handled synchronously.

---

## ✅ Summary

This enhanced **Item List Manager** demonstrates:

* Controlled input handling
* Immutable state management
* Dynamic list rendering
* User interaction enhancements (toggle, edit, delete)

It satisfies all core requirements while showcasing additional real-world functionality.

---

