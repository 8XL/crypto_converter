import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    wrapper:{
        marginTop: '5vw',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        maxWidth: 'inherit',
        justifyContent: 'center',
        alignSelf: 'flex-start',
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
        position: 'sticky',
        top: 0,
        flexDirection: 'column',
        alignSelf: 'flex-start',
        
    },
    form:{
        margin: 10,
        width: '92%'
    },
    red:{
        backgroundColor: '#fc8181',
        transition: '0.4s'
    },
    green:{
        backgroundColor: '#85d979',
        transition: '0.4s'
    },
    hidden: {
        display: 'none',
    },
    stage1:{
        position: 'absolute',
        zIndex: 10,
        top: '10vh',
        left: '38vw',
    },
    stage2:{
        position: 'absolute',
        zIndex: 10,
        top: '10vh',
        left: '38vw',
    },
    stage3:{
        position: 'absolute',
        zIndex: 10,
        top: '20vh',
        left: '50vw',
    },
    stage4:{
        position: 'absolute',
        zIndex: 10,
        top: '40vh',
        left: '38vw',
    },
    stage5:{
        position: 'absolute',
        zIndex: 10,
        top: '10vh',
        left: '50vw',
    }
}))

export default useStyles