import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'

const useStyles = createUseStyles({
  content: {
    fontSize: 20,
    maxWidth: 1090
  },
  blocks: {
    display: 'flex',
    flexFlow: 'column',
    gap: 60
  }
})

function Gyneco () {
  const classes = useStyles()
  return (
    <PageWrapper
      title='Gynécologie'
    >
      <div className={classes.content}>
        <div className={classes.blocks}>
          <ContentBlock
            imageUrl='https://image.shutterstock.com/image-vector/abstract-image-vagina-outer-space-600w-2060162975.jpg'
            landscape
          >
            <h4>Suivi gynécologique de prévention</h4>
            <List>
              <li>Consultations de gynécologie</li>
              <li>Réalisation et interprétation de frottis cervico-vaginaux</li>
              <li>Consultation pré-conceptionnelle</li>
              <li>Diagnostic et traitement d’infections urinaires basses (cystites)</li>
              <li>Diagnostic et traitement d’infections génitales basses (vaginites type mycoses, vaginoses bactériennes etc.)</li>
              <li>Dépistage des IST</li>
              <li>Vaccinations</li>
            </List>
          </ContentBlock>

          <ContentBlock
            imageUrl='https://image.shutterstock.com/z/stock-vector-set-different-types-of-contraception-birth-control-methods-and-options-girl-choosing-a-method-of-1728522166.jpg'
            flip
          >
            <h4>Contraception</h4>
            <List>
              <li>Méthodes naturelles</li>
              <li>Méthodes médicalisées</li>
              <li>Poses et ablations DIU (stérilets), implants contraceptifs, diaphragme contraceptif</li>
              <li>Contraception d’urgence</li>
            </List>
          </ContentBlock>

          <ContentBlock
            imageUrl='https://image.shutterstock.com/image-illustration/illustration-woman-enduring-pain-vaginal-600w-1774381937.jpg'
            landscape
          >
            <h4>Rééducation périnéale</h4>
            <List>
              <li>Bilan périnéal</li>
              <li>Rééducation périnéale pour les femmes de tout âge</li>
              <li>Dyspareunies (douleurs durant les rapports sexuels)</li>
              <li>Exercices sur ballon - exercices de Yoga</li>
            </List>
          </ContentBlock>

          <ContentBlock
            imageUrl='https://image.shutterstock.com/image-vector/young-beautiful-woman-practicing-yoga-600w-1862378104.jpg'
            flip
          >
            <h4>Jeunes filles</h4>
            <List>
              <li>Consultation anonyme et gratuite de l’adolescente de 15 à 17 ans inclus</li>
              <li>Vaccination HPV des jeunes filles à partir de 11 ans</li>
            </List>
          </ContentBlock>
        </div>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Gyneco)
