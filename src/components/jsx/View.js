// Use JSX
import {
  Counter,
  Header,
  Textbox,
} from '../../components'
import { editSubtitle, editTitle } from '../../actions'
// ramda does not have debounce or throttle functions
// alternatively, we could have used most's debounce function on a stream
import { debounce } from 'lodash/fp'

// lodash/fp functions are auto-curried just like ramda
const debounce400 = debounce(400)
const debouncedEditSubtitle = debounce400(editSubtitle)


/*
<View>({ gameState })
  <Controller className={'controller-div'}>
    <UIView /> ({ gameState }) //Logo, Title Menu, Overlay Menus, Dialogue, Credits
    <GameView /> ({ mapState }) //Map, Sprites, Cursor/Main Char Sprite
  </Controller>
</View>
*/

const View = ({ count, subtitle, title }) =>
  <div className={'counter-demo'}>
    <Header title={title} subtitle={subtitle} />
    <Counter count={count} />
    <Textbox
      id={'edit-title'}
      label={'Edit subtitle'}
      onInput={editTitle}
      placeholder={title || 'Enter new title here'}
    />
    <Textbox
      id={'debounced-edit-subtitle'}
      label={'Edit subtitle (Debounced)'}
      onInput={debouncedEditSubtitle}
      placeholder={subtitle || 'Enter new subtitle here'}
    />
  </div>

export default View
