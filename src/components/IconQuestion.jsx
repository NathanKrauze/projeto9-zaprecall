import playIcon from '../assets/seta_play.png'
import zapIcon from '../assets/icone_certo.png'
import almostIcon from '../assets/icone_quase.png'
import forgotIcon from '../assets/icone_erro.png'

export default function IconQuestion({status, showQuestion}) {
    switch (status) {
        case 'zap':
            return (
                <img src={zapIcon} alt='zap' data-test="zap-icon" />
            )
        case 'almost':
            return (
                <img src={almostIcon} alt='almost' data-test="partial-icon"/>
            )
        case 'forgot':
            return (
                <img src={forgotIcon} alt='forgot' data-test="no-icon"/>
            )
        case 'default':
            return (
                <img src={playIcon} onClick={showQuestion} alt='play' data-test='play-btn'/>
            )

    }
}