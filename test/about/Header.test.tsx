import {render,screen} from "@testing-library/react";
import AboutHeader from "@/components/about_us/header";

describe('About page Header',()=>{
    it('tests header text visibility',()=>{
        render(
            <AboutHeader/>
        )
        expect(screen.getByText('About us')).toBeInTheDocument()
    })
})