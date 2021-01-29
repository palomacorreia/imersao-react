import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from  'next/link'
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';


import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import Logo from '../src/components/QuizLogo';
import db from '../db.json';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - React</title>
      </Head>
      <QuizContainer>
        <Logo/>

        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Quiz React da Paloma</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome..."
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
           as={motion.section}
           transition={{ delay: 0.5, duration: 0.5 }}
           variants={{
             show: { opacity: 1 },
             hidden: { opacity: 0 },
           }}
           initial="hidden"
           animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Nextjs fez:</p>
         {/*    <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul> */}
            <Link href="https://aluraquiz-base-git-main.alura-challenges.vercel.app">
              <a>Quiz CSS da Alura</a>
            </Link>
            <Link href="https://aluraquiz-base-git-main.broncs.vercel.app/">
              <a>Learn English</a>
            </Link>
            <Link href="https://imersao-react-next-js.matheusmuriel.vercel.app/">
              <a>Quiz de Star Wars</a>
            </Link>
            <Link href="https://aluraquiz.edilson-rodrigues.vercel.app/">
              <a>Quiz da Marvel</a>
            </Link>
            <Link href="https://biblequiz.epsilveira.vercel.app/">
              <a>Quiz Bíblico</a>
            </Link>
            <Link href="https://aluraquiz-arcade.wesdrasalves.vercel.app/">
              <a>Quiz do Atari</a>
            </Link>
            <Link href="https://quiz-games.gabrielwolf-dev.vercel.app/">
              <a>Quiz de Games</a>
            </Link> 
            <Link href="https://aluraquiz-coffee.leonardot07.vercel.app/">
              <a>Quiz de Café</a>
            </Link> 

          </Widget.Content>
        </Widget>
           <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/palomacorreia/imersao-react" />
    </QuizBackground>
  );
}