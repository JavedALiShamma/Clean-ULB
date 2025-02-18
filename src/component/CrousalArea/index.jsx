import styles from "./styles.module.css"
const CrousalArea=()=>{
    return(
        <>
         <div id={styles.bestPracticeArea1} className="w-100 d-flex overflow-hidden m-auto">
          {/* bestPracticeArea1*/}
          <button onClick={scrollLeft} className={styles.scrollLeftBtn}>↠</button>
          <div className={styles.bestPracticeCard}>
            <div className={styles.logoImage}>
              <img className={styles.bpImg} src={toiletDustbin} alt="" />
            </div>
            <div className={styles.logoDetails}>
              <h5 className={styles.parameter}>Paramter : Litter bins available for disposing</h5>
              <p className={styles.badge}>SS Makrs: 10</p>
              <p className={styles.stepsTodo}>Steps to do: Put a dustbin for waste disposal of tissues and waste</p>
            </div>
          </div>
          <div className={styles.bestPracticeCard}>
            <div className={styles.logoImage}>
              <img className={styles.bpImg} src={handwash} alt="" />
            </div>
            <div className={styles.logoDetails}>
              <h5 className={styles.parameter}>Paramter :Availability of soap/operational soap dispenser & air freshener</h5>
              <p className={styles.badge}>SS Makrs: 10</p>
              <p className={styles.stepsTodo}>Steps to do: Put a dustbin for waste disposal of tissues and waste</p>
            </div>
          </div>
         
          <div className={styles.bestPracticeCard}>
            <div className={styles.logoImage}>
              <img className={styles.bpImg} src={unAbleSeat} alt="" />
            </div>
            <div className={styles.logoDetails}>
              <h5 className={styles.parameter}>Paramter : Dedicated toilet seats for differently abled/trans-gender</h5>
              <p className={styles.badge}>SS Makrs: 20</p>
              <p className={styles.stepsTodo}>Place a low height toilet seats for childeren and different abled people</p>
            </div>
          </div>
          <div className={styles.bestPracticeCard}>
            <div className={styles.logoImage}>
              <img className={styles.bpImg} src={careTaker} alt="" />
            </div>
            <div className={styles.logoDetails}>
              <h5 className={styles.parameter}>Paramter :Availability of Caretaker with name</h5>
              <p className={styles.badge}>SS Makrs: 20</p>
              <p className={styles.stepsTodo}>Steps to do:Caretaker should be present and log book is maintaned</p>
            </div>
          </div>
        
        
         
         
          
          
          
          
          
          
          
          
          <button onClick={scrollRight} className={styles.scrollRightBtn}>↞</button>
        </div>
        </>
    )
}
export default CrousalArea;