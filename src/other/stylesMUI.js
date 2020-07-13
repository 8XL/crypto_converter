import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    wrapper:{
        marginTop: '10vw',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        width: 'inherit',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    card__item:{
        width: 200,
        height: 140,
    },
    title: {
        fontSize: 14,
        borderBottom: '1px solid whitesmoke'
      },
    name: {
        marginBottom: 10,
        fontWeight: 700,
    },
    calc:{
        alignSelf: 'flex-start',
        padding: 40,
    },
    form:{
        margin: 10
    }
}))

export default useStyles