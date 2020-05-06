import React from 'react'
import { motion } from 'framer-motion'

import * as S from './styles'
import socialBrandingTemplates from 'images/SocialBrandingTemplates.png'
import ryanWarnerCodesV1 from 'images/ryan-warner-codes-v1.png'

const stripSlashes = function (string) {
  return string.replace(/[/]/g, '')
}

const images = {
  'social-branding-templates': socialBrandingTemplates,
  'ryan-warner-codes-v1': ryanWarnerCodesV1
}

export default ({ title, url, image, slug, ...rest }) =>
  <motion.div
    whileHover={{ y: -5 }}
    whileTap={{
      y: 0
    }}
    transition={{
      type: 'spring',
      stiffness: 277,
      damping: 14
    }}
  >
    <S.ResourceCardComponent to={slug} {...rest}>
      <S.Img src={images[stripSlashes(slug)]} />
      <S.Meta>
        <p>{title}</p>
      </S.Meta>
    </S.ResourceCardComponent>
  </motion.div>
