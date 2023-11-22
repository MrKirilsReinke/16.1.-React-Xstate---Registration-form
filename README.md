# TypeScript, React, XState and Formik Validation form

## Description

This project showcases a multi-step form built with TypeScript, React, XState, and Formik. It manages form validation, progression, and user data collection through distinct form parts, each handling specific information such as email, personal details, and contact information. The form employs various validation functions to ensure accurate data entry before allowing progression to subsequent steps.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [How to Contribute](#how-to-contribute)

## Installation

To get started with this project, you need to install the required dependencies and run it. Follow these steps:

1. Clone the repository to your local machine.

```bash
git clone <repository_url>
```

2. Navigate to the project directory.

```bash
cd <project_directory>
```

3. Install the project dependencies using npm.

```bash
npm install
```

4. Run the development server to start the application.

```bash
npm run dev
```

## Usage

1. Interaction: Open the application or access the form component.
2. Navigate Steps: Progress through the form by filling in details for each step.
3. Validation: Observe the validation checks ensuring accurate and complete data entry before advancing to subsequent sections.
4. Button Navigation: Utilize the provided navigation buttons ("Back", "Next") to move between steps, adapting based on the form's validation status.
5. Completion: Upon completing all required fields and validation checks, reach the end of the form where necessary actions can be performed (submission, resetting, etc.).

## Features

* Multi-step Form: Divides data entry into manageable sections.
* Form Validation: Utilizes Formik and custom validation functions to ensure accurate input.
* XState State Management: Manages form progression and transitions between steps.
* Dynamic Button Behavior: Buttons adapt appearance and functionality based on validation status.
* Clear Context Action: Clears form data upon completion or resetting, ensuring privacy and a clean slate for the next user.

## Credits

* Formik: Formik library for managing form state and validation.
* React: React library for building the user interface.
* XState: XState for managing finite state machines in the form.

This project is a testament to leveraging powerful libraries and frameworks to create a robust and user-friendly form experience.

## How to Contribute

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your feature or bug fix.

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them.

```bash
git add .
git commit -m "Added a new feature"
```

4. Push your changes to your forked repository.

```bash 
git push origin feature/your-feature-name
```

5. Create a Pull Request (PR) to the main repository, explaining your changes and improvements.
   
