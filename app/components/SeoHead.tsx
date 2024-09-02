// src/components/SeoHead.tsx
import Head from 'next/head';

interface SeoHeadProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  image,
  url,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    {/* Add more tags as needed */}
  </Head>
);

export default SeoHead;
