import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    wrapper:{
        marginTop: '10vw',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',  
    },
    card:{
        justifyContent: 'center'
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
        position: 'sticky',
    }
}))

export default useStyles