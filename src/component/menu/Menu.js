import './menu.css'

export default function Menu (props) {
    let {pages, classes} = props;

    return (
    <div>
        {
          pages.map(page => <li className={classes.join(' ')}>{page}</li> )

        }

    </div>)

}