import { Button } from "@/components/ui/button";
import { AlignJustify, Search } from "lucide-react";

export default function Header() {
  return (
    <div>
        <div className="flex justify-between items-center">
            <div><AlignJustify /></div>
            <div>
                <Button type="submit"><Search /></Button>
                {/* <input 
                type="search"
                placeholder="Search"
                /> */}
            </div>
        </div>
        <div>
            <h2>heheeh</h2>
        </div>
    </div>
  )
}
