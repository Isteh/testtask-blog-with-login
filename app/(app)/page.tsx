import styles from "./Home.module.scss";
import AboutMe from "@/components/blocks/AboutMe/AboutMe";
import SectionWithArticlesList from "@/components/ui/SectionWithArticlesList/SectionWithArticlesList";
import PostPreviewCard from "@/components/ui/PostPreviewCard/PostPreviewCard";
import { RecentPostsDataMock } from "@/mocks/RecentPostsData.mock";
import { FeaturedWorksDataMock } from "@/mocks/FeaturedWorksData.mock";
import WorkPreviewCard from "@/components/ui/WorkPreviewCard/WorkPreviewCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutMe />
      <SectionWithArticlesList title="Recent posts" href='/'>
        <ol className={styles.lineList}>
          {RecentPostsDataMock.map(item => <li key={item.title}>
            <PostPreviewCard {...item} />
          </li>)}
        </ol>
      </SectionWithArticlesList>
      <SectionWithArticlesList title="Featured works" href='/'>
        <ol className={styles.columnList}>
          {FeaturedWorksDataMock.map(item => <li key={item.title}>
            <WorkPreviewCard {...item} />
          </li>)}
        </ol>
      </SectionWithArticlesList>
    </main>
  );
}
