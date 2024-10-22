# F1Dex

A website designed to manage information about Formula 1 drivers.

## Features

- **User-Friendly Interface**: An intuitive UI for interacting with driver data.
- **Real-Time Updates**: Live updates of driver statistics using Firebase.
- **Responsive Design**: Accessible on both desktop and mobile devices.
- **TypeScript Support**: Built with TypeScript for enhanced code quality and maintainability.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/szyi10/f1dex.git
cd f1dex
```

2. Install dependencies:

```bash
npm install
```

3. Set up enviroment variables:

- Create a `.env` file in the root directory and include necessary Firebase configuration variables.

```bash
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_DATABASE_URL=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
```

### Running the Application

```bash
npm run dev
```

## License

This project is licensed under MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

## Acknowlegments

- [Formula 1](https://www.formula1.com/) for the infomration about drivers and races.
- [Stats F1](https://www.statsf1.com/) for providing detailed statistics and data on Formula 1
