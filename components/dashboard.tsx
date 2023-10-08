import React from 'react'
import { Box, H5, Illustration, IllustrationProps, Text } from '@adminjs/design-system'
import { styled } from '@adminjs/design-system/styled-components'



const boxes = () => [{
  variant: 'Planet',
  title: 'World-class logging',
  subtitle: 'Stop struggling. You no longer need to search through endless server logs. Pinpoint exceptions and slow database queries in an easy-to-use user interface with a single click.',
}, {
  variant: 'DocumentCheck',
  title: 'Built-in caching',
  subtitle: `Cut down on your database costs. Don't save all your data permanently when you don't have to. Serverpod comes with a high-performance distributed cache built right in.`,
}, {
  variant: 'DocumentSearch',
  title: 'Revolutionary ORM',
  subtitle: `Save time. Talking with your database can be a hassle. With Serverpod's ORM, your queries use native Dart types and null-safety. There is a straight path from your statically checked code to the database.`,
},
]

const Card = styled(Box)`
  display: ${({ flex }): string => (flex ? 'flex' : 'block')};
  color: ${({ theme }) => theme.colors.grey100};
  height: 100%;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.space.md};
  transition: all 0.1s ease-in;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary100};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`

Card.defaultProps = {
  variant: 'container',
  boxShadow: 'card',
}

export const Dashboard: React.FC = () => {
  return (
    // <Box>
    //   <Box position="relative" data-css="default-dashboard" >
    //     <Box position="">
    //       <img src="https://serverpod.dev/assets/img/illustration.webp" alt="Illustration Serverpod" height={284} />
    //       <p>Serverpod is an open-source, scalable app server, written in Dart for the Flutter community.</p>
    //     </Box>
    //   </Box>
    <Box
      mt={['xl', 'xl']}
      mb="xl"
      mx={[0, 0, 0, 'auto']}
      px={['default', 'lg', 'xxl', '0']}
      position="relative"
      flex
      flexDirection="row"
      flexWrap="wrap"
      width={[1, 1, 1, 1024]}
    >
      {boxes().map((box, index) => (
        <Box key={index} width={[1, 1 / 2, 1 / 2, 1 / 3]} p="lg">
          <Card target="_blank">
            <Text textAlign="center">
              <Illustration
                variant={box.variant as IllustrationProps['variant']}
                width={100}
                height={70}
              />
              <H5 mt="lg">{box.title}</H5>
              <Text>{box.subtitle}</Text>
            </Text>
          </Card>
        </Box>
      ))}


      <Box width={[1, 1, 1 / 2]} p="lg">
        <Card as="a" flex href="https://docs.serverpod.dev/" target="_blank">
          <Box flexShrink={0}>
            <img src="https://serverpod.dev/assets/img/illustration.webp" alt="Illustration Serverpod" height={80} />
          </Box>
          <Box ml="xl">
            <H5>{'The missing server for Flutter'}</H5>
            <Text>{'Serverpod is an open-source, scalable app server, written in Dart for the Flutter community.'}</Text>
          </Box>
        </Card>
      </Box>

      <Box width={[1, 1, 1 / 2]} p="lg">
        <Card as="a" flex href="https://github.com/serverpod/serverpod/issues" target="_blank">
          <Box flexShrink={0}><Illustration variant="GithubLogo" /></Box>
          <Box ml="xl">
            <H5>{'Found a Bug? need improvement?'}</H5>
            <Text>{'Raise an issue on our GitHub repo'}</Text>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

export default Dashboard