import WelcomeBox from "../../sections/WelcomeBox/WelcomeBox"
import WelcomeBoxWithChildren from "../../sections/WelcomeBoxWithChildren/WelcomeBoxWithChildren"
import Counter from "../../sections/Counter/Counter"
import Modal from "../../sections/Modal/Modal"

const Main = () => {
    const currentDate = new Date();
    return (
        <div>
            <h1>Hello from Main</h1>
            {/* Jesli chcemy uzyc komponentu wewnatrz innego, wywolujemy go jako znacznik html */}
            <WelcomeBox name="Jungle" duration={5} />
            <WelcomeBox name="My house" duration={10} />
            <WelcomeBox />
            <hr />

            <WelcomeBoxWithChildren>
                <p>Welcome to my world!</p>
            </WelcomeBoxWithChildren>
            <WelcomeBoxWithChildren>
                <h4>Welcome to my house!</h4>
            </WelcomeBoxWithChildren>
            <hr />
            <Counter time={currentDate} timer={4}></Counter>
            <Modal>
                <p>Siala baba mak</p>
            </Modal>
        </div>
    )
}

export default Main