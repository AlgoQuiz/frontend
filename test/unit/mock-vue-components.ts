type propKeys = 'path' | 'tag' | 'for'

interface MockComponent {
  name: string
  render: () => void
  props?: string[] | any
  $slots: {
    default: string
  }
}

export default [
  {
    name: 'nuxt-child',
    render(h: Function) {
      return h('div', [this.$slots.default])
    },
  } as MockComponent,
  {
    name: 'nuxt-link',
    props: ['to'],
    render(h: Function) {
      return h('a', [this.$slots.default])
    },
  } as MockComponent,
  {
    name: 'client-only',
    render(h: Function) {
      return h('div', [this.$slots.default])
    },
  } as MockComponent,
  {
    name: 'no-ssr',
    render(h: Function) {
      return h('div', [this.$slots.default])
    },
  } as MockComponent,
  {
    name: 'youtube',
    render(h: Function) {
      return h('div', [this.$slots.default])
    },
  } as MockComponent,
  {
    name: 'i18n',
    props: ['path', 'tag', 'for'],
    render(h: Function) {
      return h(this.props.tag, [this.$slots.default])
    },
  } as MockComponent,
  {
    name: 'BNavbar',
    props: ['toggleable', 'type', 'variant'],
    render(h: Function) {
      return h('div', [this.$slots.default])
    },
  } as MockComponent,
  {
    name: 'BNavbarBrand',
    props: ['to'],
    render(h: Function) {
      return h('div', [this.$slots.default])
    },
  } as MockComponent,
  {
    name: 'BNavbarToggle',
    props: ['target'],
    render(h: Function) {
      return h('div', [this.$slots.default])
    },
  } as MockComponent,
  {
    name: 'BCollapse',
    props: ['id', 'is-nav'],
    render(h: Function) {
      return h('div', [this.$slots.default])
    },
  } as MockComponent,
  {
    name: 'BNavbarNav',
    render(h: Function) {
      return h('div', [this.$slots.default])
    },
  } as MockComponent,
  {
    name: 'BNavItem',
    props: ['to'],
    render(h: Function) {
      return h('div', [this.$slots.default])
    },
  } as MockComponent,
]
