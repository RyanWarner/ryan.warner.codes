import React from 'react'
import { motion } from 'framer-motion'

import * as S from './styles'
import SocialBrandingTemplates from 'images/SocialBrandingTemplates.png'

export default ({ title, url, image }) =>
  <motion.div
    whileHover={{ y: -5 }}
    whileTap={{
      y: 0
    }}
  >
    <S.ResourceCardComponent>
      <S.Img src={SocialBrandingTemplates} />
      <S.Meta>
        <p>{title}</p>
      </S.Meta>
    </S.ResourceCardComponent>
  </motion.div>
