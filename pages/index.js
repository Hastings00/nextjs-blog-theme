import Link from 'next/link';
import { getClasses } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ classes, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">{classItem.subject}</h2>
              <div>
                <h3 className="text-lg font-semibold mb-2">Notes</h3>
                <p className="opacity-60">{classItem.notes}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Exercises</h3>
                <p className="opacity-60">{classItem.exercises}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Examinations</h3>
                <p className="opacity-60">{classItem.examinations}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const classes = getClasses();
  const globalData = getGlobalData();

  return { props: { classes, globalData } };
}
