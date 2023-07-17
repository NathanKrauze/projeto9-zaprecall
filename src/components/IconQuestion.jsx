import playIcon from '../assets/seta_play.png'
import zapIcon from '../assets/icone_certo.png'
import almostIcon from '../assets/icone_quase.png'
import forgotIcon from '../assets/icone_erro.png'

export default function IconQuestion({status, showQuestion}) {
    switch (status) {
        case 'zap':
            return (
                <img src={zapIcon} alt='zap' />
            )
        case 'almost':
            return (
                <img src={almostIcon} alt='almost' />
            )
        case 'forgot':
            return (
                <img src={forgotIcon} alt='forgot' />
            )
        case 'default':
            return (
                <img src={playIcon} onClick={showQuestion} alt='play' />
            )

    }
}