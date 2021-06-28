export default function Menu (props) {
    let {pages} = props;
    console.log(pages);
    return (
    <div>
        {
          pages.map(page => <li>{page}</li> )

        }

    </div>)

}