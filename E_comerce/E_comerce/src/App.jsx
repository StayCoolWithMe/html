import Grid from '@mui/material/Grid';
import {Products} from './Products';
import {Cart} from './Cart';
export default function App() {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {Products.map((product)=>(
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Cart/>
          </Grid>
          
        ))}
      </Grid>
    </main>
  )
}