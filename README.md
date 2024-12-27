# Paytm Payment App

This repo contains a Project which is a Full Stack Payment Application for User and Merchants. Covered every aspect of a payment application. Mimiced the bank-webhook for seamless integration with the bank account and the application.

##Technology Stack

Next.js using Turborepo for both frontend and backend of the application

Node and Express as backend for the bank-webhook handler

## Local Setup

Clone the repository or Download in ZIP

Open it in VS Code

Run:
```
npm install
```

```
cd packages/db
npm install
```

```
cd apps/user-app
npm install
```
```
cd apps/bank-webhook
npm install
```

In packages/db Create a .env file and add the DATABASE_URL. Then just migrate the DB and then generate a Client.

After all of this Run:
```
npm run dev
```

And Done! The will now be running.

