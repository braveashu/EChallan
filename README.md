# E-Challan Management System

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Challenges Faced](#challenges-faced)
- [Future Improvements](#future-improvements)
- [Learnings](#learnings)
- [License](#license)

## Introduction

The **E-Challan Management System** is a web-based platform designed to digitize the process of traffic violation management. It allows law enforcement personnel to issue challans (fines) to violators, manage violator details, and track vehicle information. The system also facilitates the generation of digital receipts for fines and sends email notifications to violators.

## Features

- **Personnel Management**: Signup and login functionalities for law enforcement personnel.
- **Challan Management**: Generate and fetch challans for traffic violations.
- **Vehicle Management**: Add and retrieve vehicle details associated with violators.
- **Violator Management**: Add and fetch violator details using their Aadhar number.
- **Email Notifications**: Send digital fine receipts to violators via email.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Bcrypt for password hashing
- **Email Service**: Nodemailer

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/e-challan-management-system.git
   cd e-challan-management-system
