import logo from '@/public/images/i-love-ice-cream.webp';
import ArticleWrapper from './ArticleWrapper';
const OurStoryArticles = () => (
  <div className="flex flex-col gap-y-20 rounded-md">
    <ArticleWrapper
      description="Where rolled ice cream reigns supreme and boba teas tantalize taste buds. Start your tasty adventure as our skilled artisans craft your frozen treat right before your eyes, transforming fresh ingredients into delectable rolls of creamy goodness. We take great joy in offering warm, welcoming hospitality to all our guests, ensuring each visit is filled with happiness and satisfaction. Whether you're creating cherished memories,commemorating milestones, honoring traditions, or simply craving a mood-boost, our array of fresh, flavorful treats promises to deliver a delightful experience every time."
      header="Welcome"
      image={logo}
      alt="caramel flavor ice cream in blue cup"
    />
  </div>
);

export default OurStoryArticles;
