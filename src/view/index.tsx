import React from 'react';
import { useState } from 'react';
import styles from "./index.module.scss"
import { Button } from "antd";
function View() {
  const [num, setNum] = useState<number>(0)
  return (
    <div className={styles.view}>
      Hello Web3!{num}
      <Button type="primary" onClick={() => { setNum(num + 1) }}>按钮</Button>
    </div>
  )
}

export default View