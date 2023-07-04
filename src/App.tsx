import { Button } from './components/Button/Button'
import './styles/App.css'

function App() {
  const gridContainerStyle = {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(4, 1fr)',
  }
  const smallText = {
    fontSize: '0.75rem',
    margin: '0.5rem',
    display: 'block',
  }
  return (
    <>
      <div style={gridContainerStyle}>
        {/* two elements */}
        <div style={{ gridColumn: 'span 2' }}>
          <span style={smallText}>&lt;Button /&gt;</span>
          <Button>Default</Button>
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <span style={smallText}>&:hover, &:focus</span>
          <Button className='hover'>Default</Button>
        </div>

        {/* two elements */}
        <div style={{ gridColumn: 'span 2' }}>
          <span style={smallText}>&lt;Button variant="outline" /&gt;</span>
          <Button variant='outline'>Default</Button>
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <span style={smallText}>&:hover, &:focus</span>
          <Button variant='outline' className='hover'>
            Default
          </Button>
        </div>

        {/* two elements */}
        <div style={{ gridColumn: 'span 2' }}>
          <span style={smallText}>&lt;Button variant="text" /&gt;</span>
          <Button variant='text'>Default</Button>
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <span style={smallText}>&:hover, &:focus</span>
          <Button variant='text' className='hover'>
            Default
          </Button>
        </div>

        {/* one element */}
        <div style={{ gridColumn: 'span 4' }}>
          <span style={smallText}>&lt;Button disableShadow /&gt;</span>
          <Button disableShadow>Default</Button>
        </div>

        {/* two elements */}
        <div style={{ gridColumn: 'span 2' }}>
          <span style={smallText}>&lt;Button disabled /&gt;</span>
          <Button disabled>Disabled</Button>
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <span style={smallText}>
            &lt;Button variant="text" disabled /&gt;
          </span>
          <Button variant='text' disabled>
            Disabled
          </Button>
        </div>

        {/* two elements */}
        <div style={{ gridColumn: 'span 2' }}>
          <span style={smallText}>
            &lt;Button startIcon="local_grocery_store" /&gt;
          </span>
          <Button startIcon='local_grocery_store'>Default</Button>
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <span style={smallText}>
            &lt;Button endIcon="local_grocery_store" /&gt;
          </span>
          <Button endIcon='local_grocery_store'>Default</Button>
        </div>

        {/* three elements */}
        <div style={{ gridColumn: 'span 1' }}>
          <span style={smallText}>&lt;Button size="sm" /&gt;</span>
          <Button size='sm'>Default</Button>
        </div>
        <div style={{ gridColumn: 'span 1' }}>
          <span style={smallText}>&lt;Button size="md" /&gt;</span>
          <Button size='md'>Default</Button>
        </div>
        <div style={{ gridColumn: 'span 1' }}>
          <span style={smallText}>&lt;Button size="lg" /&gt;</span>
          <Button size='lg'>Default</Button>
        </div>
        <div style={{ gridColumn: 'span 1' }}></div>

        {/* four elements */}
        <div style={{ gridColumn: 'span 1' }}>
          <span style={smallText}>&lt;Button color="default" /&gt;</span>
          <Button color='default'>Default</Button>
        </div>
        <div style={{ gridColumn: 'span 1' }}>
          <span style={smallText}>&lt;Button color="primary" /&gt;</span>
          <Button color='primary'>Default</Button>
        </div>
        <div style={{ gridColumn: 'span 1' }}>
          <span style={smallText}>&lt;Button color="secondary" /&gt;</span>
          <Button color='secondary'>Default</Button>
        </div>
        <div style={{ gridColumn: 'span 1' }}>
          <span style={smallText}>&lt;Button color="danger" /&gt;</span>
          <Button color='danger'>Default</Button>
        </div>

        {/* four elements */}
        <div style={{ gridColumn: 'span 1' }}>
          <Button color='default' className='hover'>
            Default
          </Button>
        </div>
        <div style={{ gridColumn: 'span 1' }}>
          <Button color='primary' className='hover'>
            Default
          </Button>
        </div>
        <div style={{ gridColumn: 'span 1' }}>
          <Button color='secondary' className='hover'>
            Default
          </Button>
        </div>
        <div style={{ gridColumn: 'span 1' }}>
          <Button color='danger' className='hover'>
            Default
          </Button>
        </div>
      </div>
    </>
  )
}

export default App
