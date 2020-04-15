import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import * as S from './styles'
import Particles from './Particles'

export default props => {
  useEffect(() => {
    async function initHeartEmitter () {
      await Particles.initialize()
      Particles.start()
    }
    initHeartEmitter()
  }, [])

  return (
    <S.HeartEmitterComponent id='heartEmitter' {...props}>
      <S.HeartContainer>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.9
          }}
          transition={{
            type: 'spring',
            stiffness: 277,
            damping: 14
          }}
        >
          <S.StyledHeartClicker onClick={Particles.handleHeartClick} />
        </motion.div>
      </S.HeartContainer>
    </S.HeartEmitterComponent>
  )
}
