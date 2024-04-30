import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Intuitivo',
    Svg: require('@site/static/img/people.svg').default,
    description: (
      <>
        Uma ferramenta intuitiva para facilitar a comunicação entre gestores e colaboradores
      </>
    ),
  },
  {
    title: 'Prático',
    Svg: require('@site/static/img/thumb-up-down.svg').default,
    description: (
      <>
        Uma maneira prática e eficiente de criar e enviar feedbacks. 
      </>
    ),
  },
  {
    title: 'Dados centralizados',
    Svg: require('@site/static/img/document.svg').default,
    description: (
      <>
        Uma maneira de centralizar todos os dados de feedbacks em um único local, simplificando o acesso e garantindo a consistência das informações.

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
