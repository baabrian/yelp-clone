import React from 'react'
import { Hero } from '../../components/Hero'
import { useStyles } from './styles'

export const Landing: React.FC = () => {
    const classes = useStyles();

    return <div className={classes.lading}><Hero /></div>
}