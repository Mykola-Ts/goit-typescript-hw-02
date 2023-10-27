/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

interface PageInterface {
  title: string;
}

class Page extends Component<PageInterface> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
