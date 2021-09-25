# ReactNativeNavigation

#This app has TodoList functionality using local Storage and Network API call.

## Introduction
This application is a simple base project which has below features points:
- Reuse Component.
- Common Style.
- [Tab View](https://reactnavigation.org/docs/material-top-tab-navigator/)
- [Navigation 5](https://reactnavigation.org/)

## App Overview
 The app features a two screen navigation

- First Screen of the app is login which required any input as param, which stores data in local storage using realm db. On Logout click it will logout and clear the local db.
  1. On Login Screen user must eneter User ID and password to access new features.
  2. On Submit click user willbe navigated to new screen where local and remote tab will be shown.
  <img  align="center" alt="Second Screen" src="scr_1.PNG" />

- Second screen has two Tab(Local & Remote).
  1. Remote Tab fetches data from network api call.
  
  <img  align="center" alt="Second Screen" src="scr_2.PNG" />
  
  2. Local Tab will fetched data from local storage if have any data.
  
  <img  align="center" alt="Second Screen" src="scr_3.PNG" />
  
  3. On Local tab user can do CRUD function with local data.
  4. On Item click User and Update, Delete & View details of Item.
  
  <img  align="center" alt="Second Screen" src="scr_4.png" />
  
  5. On Add FAB Button user can add todo task.
  
  <img  align="center" alt="Second Screen" src="scr_5.png" /> 
