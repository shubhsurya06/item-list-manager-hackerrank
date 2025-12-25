Here is a **clean, professional, Hackerrank-style updated `README.md`** with your **extra functionality clearly documented**, without changing the original intent of the problem.

You can **copy-paste this directly** 👇

---

# Item List Manager – Hackerrank

### 📝 Problem Statement

You are tasked with creating a simple application called **Item List Manager** that displays a list of items and allows users to add new items to the list.

The items are displayed in an unordered list (`<ul>`), and users can add new items using an input field and a button.

![Item List Manager Demo](https://s3.amazonaws.com/hr-assets/0/1719046513-25632d1299-hrc-idea-manager-list-animation.gif)

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

---

## ⭐ Extra Functionality (Enhancements)

In addition to the core requirements, the application includes the following **additional features**:

### ☑️ Toggle Item Completion

* Each item includes a checkbox.
* Clicking the checkbox toggles the completion status of the item.
* Completed items are visually distinguished (e.g., text strike-through).

### ✏️ Edit Item

* Users can edit an existing item’s text.
* The updated text is immediately reflected in the list.

### 🗑️ Delete Item

* Users can remove an item from the list.
* Deleting an item updates the list instantly.

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

