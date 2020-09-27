import * as S from './styles'
import { Seo, Header } from 'components'

const PostPage = ({ frontMatter, mdxHtml, ogImage }) => {
  return (
    <>
      <S.Wrap>
        <Seo title={frontMatter.title} ogImage={ogImage} />
        <Header />
        <S.Main>
          <h1>{frontMatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: mdxHtml }} />
        </S.Main>
      </S.Wrap>
    </>
  )
}

export default PostPage
