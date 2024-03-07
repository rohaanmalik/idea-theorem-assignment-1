# Idea Theorem Challenge


## Commands
### Install dependencies
```shell
npm install
```

### Start app with development
```shell
npm run dev
```

### Build app
```shell
npm run build
```

## Packages
- [Material-UI](https://mui.com/): A react component library
/**
 * [react-hook-form](https://react-hook-form.com/): A lightweight form validation library for React.
 */
- [react-hook-form](https://react-hook-form.com/): React Hook Form is a library for managing form state in React applications. It provides a simple and intuitive API for handling form validation, error messages, and form submission.
- [zod](https://zod.dev/): TypeScript-first schema validation with static type inference

### Task Description

Create a simple registration page using any Javascript framework (preferably ReactJS). Feel free to use any validation libraries, http request libraries, CSS libraries or any other library you feel necessary. 

The form should validate full_name, contact_number, email, date_of_birth, password, and confirm_password fields. If the user presses the “submit” button, the form should validate, and the error messages should appear accordingly. The submit button should send an POST API call to the following route https://fullstack-test-navy.vercel.app/api/users/create. 

The API route will return either success or failure messages. The messages should appear to the user on the alert message component, and the colors should change according to the status returned.

### API description:
Success: If full_name, contact_number, email, date_of_birth, and password are present, the API will return a success message containing the title and description. 
NOTE: The date_of_birth is a concatenation of day, month, and year dropdown values. 
Error:  If the following full_name, contact_number, email, date_of_birth, and password are missing, the API will return an error message containing the title and description. 
Form validation:
contact_number: Not empty, Canadian phone number format
email: Not empty, email format
day: Not empty, calendar days
month: Not empty, Jan - Dec.
year: Not empty, any past date. 
password: 
1- Not empty.
2- Lower case (a-z), upper case (A-Z) and numbers (0-9).
3- Must have 8 characters in length
confirm_password: Must be the same as the password field