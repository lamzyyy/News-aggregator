# News Aggregator

Welcome to the News Aggregator project! This application is a simple, yet powerful tool for fetching and displaying the latest news articles using React, Vite, and Google's News API.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Development](#development)
- [License](#license)

## Introduction

The News Aggregator is a React-based web application that leverages Vite for fast development and Google's News API to pull in the latest news articles. Users can view headlines from various categories and sources, making it easy to stay up-to-date with current events.

## Features

- **Real-Time News Updates:** Fetch and display the latest news articles.
- **Category Filtering:** View news by categories such as technology, sports, and more.
- **Source Filtering:** View news by specific sources like al-jazeera, bbc-news, etc.
- **Date Filtering:** View news by specific date ranges.
- **Search Functionality:** Quickly find articles on specific topics or keywords.

## Installation

To get started with the News Aggregator, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/news-aggregator.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd news-aggregator
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000` to start using the News Aggregator. You can:

- **Filter by Category:** Use the category dropdown to select different news categories.
- **Filter by Date:** Use the Start/End Date dropdowns to select articles within specific Starting or ending dates.
- **Filter by Source:** Use the Sources dropdown to select different news source.
- **Search for Articles:** Use the search bar to find articles by keywords.

## Configuration

Before running the application, you'll need to set up your Google News API key.

1. **Create a `.env` file in the root directory of the project.**
2. **Add your API key to the `.env` file:**

   ```env
   VITE_API_KEY_1=your_google_news_api_key_here
   ```

   Make sure to replace `your_google_news_api_key_here` with your actual API key.

## Development

To contribute or make changes to the project, follow these guidelines:

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Lint and format your code:**

   ```bash
   npm run lint
   npm run format
   ```

4. **Build the project:**

   ```bash
   npm run build
   ```

5. **Run tests (if any):**

   ```bash
   npm test
   ```
Feel free to reach out with any questions or contributions. Enjoy exploring the latest news with your new News Aggregator app!
