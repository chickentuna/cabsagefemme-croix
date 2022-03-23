import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { createUseStyles } from 'react-jss'
import { theme, Theme } from '../theme'

const useStyles = createUseStyles((theme:Theme) => ({
  category: {

  }
}))

function createData (
  acte: string,
  montant: string,
  prise: string,
  reste: string
) {
  return { acte, montant, prise, reste }
}

const categories = [
  {
    title: 'Grossesse',
    data: [
      createData('Consultation', '25,00 €', '70%', '7,50 €'),
      createData('Entretien prénatal précoce', '42,00 €', '100%', '0,00 €'),
      createData('Bilan prénatal', '35,28 €', '100%', '0,00 €'),
      createData('Préparation à la Naissance 1 famille', '33,60 €', '100%', '0,00 €'),
      createData('Préparation à la Naissance 2-3 familles', '32,48 €', '100%', '0,00 €'),
      createData('Préparation à la Naissance 4-6 familles', '16,80 €', '100%', '0,00 €'),
      createData('observation grossesse pathologique avec ERCF - grossesse unique', '43,68 €', '100%', '0,00 €'),
      createData('observation grossesse pathologique avec ERCF - grossesse multiple', '63,28 €', '100%', '0,00 €'),
      createData('ERCF sans prescription grossesse unique', '35,00 €', '100%', '0,00 €'),
      createData('ERCF sans prescription grossesse multiple', '54,60 €', '100%', '0,00 €'),
      createData('Injection Rhophylac', '10,90 €', '100%', '0,00 €')
    ]
  },

  {
    title: 'Gynécologie',
    data: [

      createData('première consultation de contraception et de prévention pour les jeunes filles de 15 à 17 ans inclus', '46,00 €', '100%', '0,00 €'),
      createData('Suivi de rééducation périnéale', '19,60 €', '70%', '5,88 €'),
      createData('Frottis cervicol-vaginal', '12,46 €', '70%', '3,74 €'),
      createData('Pose d’implant pharmacologique sous-cutané', '17,99 €', '70%', '5,40 €'),
      createData('Ablation ou changement d’implant sous-cutané', '41,80 €', '70%', '12,54 €'),
      createData('Pose d’un Dispositif Intra-Utérin', '38,40 €', '70%', '11,52 €'),
      createData('Changement d’un Dispositif Intra-Utérin', '38,40 €', '70%', '11,52 €'),
      createData('Ablation d’un dispositif intra-utérin par un matériel intra-utérin de préhension, par voie vaginale', '62,72 €', '70%', '18,82 €'),
    ]
  },
  {
    title: 'Visite à Domicile',
    data: [

      createData('visite à domicile', '25,00 €', '70%', '7,50 €'),
      createData('Indemnité forfaitaire de déplacement', '4,00 €', '70%', '1,20 €'),
      createData('Observation et traitement à domicile d’une grossesse nécessitant, sur prescription du médecin, une surveillance intensive', '25,20 €', '100%', '0,00 €'),
      createData('Surveillance à domicile mère-enfant de J2 à J12, les deux premières fois, un seul enfant', '46,20 €', '100%', '0,00 €'),
      createData('Surveillance à domicile mère-enfant de J2 à J12, vistes suivantes, un seul enfant', '33,60 €', '100%', '0,00 €'),
      createData('Surveillance à domicile mère-enfant de J2 à J12, les deux premières fois, naissance multiple', '64,40 €', '100%', '0,00 €'),
      createData('Surveillance à domicile mère-enfant de J2 à J12, vistes suivantes, naissance multiple', '47,60 €', '100%', '0,00 €'),
      createData('Ablation d’agrafes/pansement césarienne', '8,72 €', '100%', '0,00 €'),
    ]
  },
  {
    title: 'Majorations',
    data: [

      createData('Majoration sortie précoce', '25,00 €', '100%', '0,00 €'),
      createData('Majoration dimanche et jour férié', '21,00 €', '100%', '0,00 €'),
      createData('Majoration de nuit de 20 h à 0 h et de 6 h à 8 h', '35,00 €', '100%', '0,00 €'),
      createData('Majoration de nuit de 0 h à 6 h', '40,00 €', '100%', '0,00 €'),
      createData('Majoration pour soins d’urgence faits au cabinet après examen en urgence d’un patient', '26,88 €', '70%', '8,06 €'),
      createData('Majoration déplacement en zone éloignée du cabinet, à la demande de la patiente', '30,00 €', '0', '30,00 €'),
    ]
  }
]

function PriceTable () {
  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 440px)' }}>
        <Table stickyHeader size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Acte</TableCell>
              <TableCell align='right'>Montant</TableCell>
              <TableCell align='right'>Prise en charge SS</TableCell>
              <TableCell align='right'>Reste à charge /&nbsp;PEC mutuelle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <React.Fragment key={category.title}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.01071em',
                      display: 'table-cell',
                      borderBottom: '1px solid rgb(224, 224, 224)',
                      textAlign: 'center',
                      padding: '16px',
                      backgroundColor: theme.sfBlack,
                      color: 'white'
                    }} colSpan={4}
                  >{category.title}
                  </TableCell>
                </TableRow>
                {category.data.map((row) => (
                  <TableRow
                    key={row.acte}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.acte}
                    </TableCell>
                    <TableCell align='right'>{row.montant}</TableCell>
                    <TableCell align='right'>{row.prise}</TableCell>
                    <TableCell align='right'>{row.reste}</TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default React.memo(PriceTable)
