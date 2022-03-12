import styled from 'styled-components'


const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  font-size: 4em;
  line-height: 0.74em;
  color: #1B4332;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

const Left = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  color: #72B300;
  height: 100%;
  padding: 100px;
  font-family: Andale Mono, monospace;
  font-size: 3rem;
  white-space: nowrap;
  line-height: 0.8em;
  @media (max-width: 768px) {
    padding: 50px;
  }
`

const Right = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #72B300;
  color: #B6B6B6;
`

const Sub = styled.div`
  position: absolute; 
  bottom: 25%;
  left: 10%;
  align-self: end;
  width: 200px;
  height: 2px;
  background: #006400;
`

const Jumbo = styled.div`
  align-self: center;
  padding: 100px;
  font-size: 3.5em;
  color: #252525;
`

const Label = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.2em;
  line-height: 1em;
  color: #252525;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`

export default function Underlay() {
  return (
    <Grid>
      <Left>
        <div>
          #RTXON
          <br />
          <br />
          IMPROVED GRAPHICS WITH RAY TRACING
          <br />
          AND DLSS
          <br />
          <br />
          THE WORLD'S FASTEST VIDEO CARDS
          <br />
          RTX Series
        </div>
        <Sub />
      </Left>
      <Right>
        <Jumbo>RTX</Jumbo>
      </Right>
    </Grid>
  )
}
