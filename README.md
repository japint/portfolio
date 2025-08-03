# Angelo Centeno - Modern Portfolio Website

A modern, responsive portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **PostgreSQL** with **Prisma** ORM.

## 👨‍💻 About Angelo Centeno

Full-Stack Web Developer based in Sankt Augustin, Germany. Specialized in PERN stack development with expertise in React, Next.js, Node.js, PostgreSQL, and modern JavaScript technologies. Currently pursuing advanced German language certification while actively contributing to collaborative tech projects.

## 🚀 Features

- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Smooth animations and hover effects
- **SEO Optimized**: Meta tags and semantic HTML
- **Dark Theme**: Professional dark theme with gradient accents

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (Neon for production)
- **Deployment**: Vercel
- **Icons**: React Icons

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/japint/portfolio
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL="your-postgresql-connection-string"
   ```

4. **Set up the database**

   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🚀 Deployment to Vercel

### Prerequisites

- Create a [Vercel](https://vercel.com) account
- Create a [Neon](https://neon.tech) PostgreSQL database

### Step 1: Set up Neon Database

1. Go to [Neon](https://neon.tech) and create a new project
2. Copy your connection string
3. Update your `.env` file with the Neon connection string

### Step 2: Deploy to Vercel

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**

   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `DATABASE_URL`: Your Neon connection string

3. **Deploy**
   - Vercel will automatically build and deploy your site
   - Your site will be available at `https://your-project-name.vercel.app`

## 📝 Customization

### 1. Update Personal Information

Edit the following files to add your personal information:

- `src/components/Hero/Hero.tsx` - Angelo Centeno's name and bio
- `src/components/Footer/Footer.tsx` - Angelo's contact information
- `src/components/TimeLine/TimeLine.tsx` - Career journey and achievements

### 2. Angelo's Projects

The portfolio showcases Angelo's journey from engineering and project management to full-stack web development, including:

- **Pinterest Clone**: Built with PostgreSQL, Express, React, and Node.js
- **FastAPI Projects**: Collaborative community development
- **Next.js Applications**: Modern web development projects

### 3. Customize Colors

Update the color scheme in `tailwind.config.js`.

## 🗄️ Database Schema

The application includes models for Projects, Accomplishments, Technologies, and Timeline Events.

## 📱 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

---

**Built with ❤️ by Angelo Centeno using Next.js, TypeScript, and Tailwind CSS**
