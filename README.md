<br />
<p align="center">
  <a href="https://github.com/bohemus307/SaltyDogUI">
    <img src="public/images/heronlogosquare.png" alt="Logo" height="100">
  </a>

  <h3 align="center">SaltyDog UI</h3>

  <p align="center">
    This is the user interface software for a salinity sensor system that tracks EC, PH, and DO levels in nutrient saltwater used in an Heron Farms indoor farm. It Uses Atlas Scientific sensors and communicates through wifi to an AWS IoT core where it transmits data to aurora DB through event actions. This User interface uses React and Apollo GraphQL utilizing Prisma with an Express Server that utilizes a PG Database instance with Timescale DB organizing the time series data. In deployment the DB is replaced with an AWS aurora DB instance with data coming from an AWS IoT Thing action.
    <br />
    <a href="https://github.com/bohemus307/SaltyDogUI"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/bohemus307/SaltyDogUI">View Demo</a>
    ·
    <a href="https://github.com/bohemus307/SaltyDogUI/issues">Report Bug</a>
    ·
    <a href="https://github.com/bohemus307/SaltyDogUI/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

### Built With

* [React](React.js)
* [GraphQL](GraphQL)
* [TypeScript](TypeScript)
* [Prisma](Prisma)
* [PostgresQL](Postgresql)
* [Express](Express)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Node.js 14+ required
* npm
```sh
npm install
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/bohemus307/SaltyDogUI.git
```
2. Install NPM packages
```sh
npm install
```

## Usage

# Info for setting up prisma
[Prisma Docs](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project-typescript-postgres)

_For more examples, please refer to the [Documentation](https://example.com)_

## Roadmap

See the [open issues](https://github.com/github_username/repo_name/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [Email](powerofsilence307@gmail.com) - email

Project Link: ["https://github.com/bohemus307/SaltyDogUI"]("https://github.com/bohemus307/SaltyDogUI")



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* []()
* []()
* []()





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=flat-square
[contributors-url]: https://github.com/github_username/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=flat-square
[forks-url]: https://github.com/github_username/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo.svg?style=flat-square
[stars-url]: https://github.com/github_username/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=flat-square
[issues-url]: https://github.com/github_username/repo/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=flat-square
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username
[product-screenshot]: images/screenshot.png