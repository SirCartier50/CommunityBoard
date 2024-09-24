import React from "react";
import Event from "./Event";
import GriffithObservatory from '../images/GriffithObservatory.jpg'
import Universal from '../images/Universal.jpg'
import Getty from '../images/Getty.jpg'
import WaltDisney from '../images/WaltDisney.jpg'
import SantaMonica from '../images/SantaMonica.jpg'
import DodgerStadium from '../images/DodgerStadium.jpg'
import Petersen from '../images/Petersen.jpg'
import Lacma from '../images/Lacma.jpg'
import CSC from '../images/CSC.jpg'
import HollywoodBowl from '../images/HollywoodBowl.jpg'

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <tbody>
                    <tr>
                        <Event color='white' title="The Getty" description='Famous, sizable free museum highlighting American & European art, architecture & manicured gardens.' link='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.getty.edu%2F&psig=AOvVaw3D4jV_9L8UrsURPCJMZrZn&ust=1727226712679000&source=images&cd=vfe&opi=89978449&ved=0CAQQ_BdqFwoTCMjO0oPN2ogDFQAAAAAdAAAAABAp' image={Getty} alt="The Getty" rate="4.8⭐"/>
                        <Event color='white' title="Walt Disney Concert Hall" description='Frank Gehry-designed music hall with striking steel architecture & pristine acoustics.' link='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.laphil.com%2F&psig=AOvVaw3D4jV_9L8UrsURPCJMZrZn&ust=1727226712679000&source=images&cd=vfe&opi=89978449&ved=0CAQQ_BdqFwoTCPCltJSz2ogDFQAAAAAdAAAAABAv' image={WaltDisney} alt="Walt disney" rate="4.7⭐"/>
                        <Event color='white' title="The Griffith Observatory" description='This art deco landmark from 1935 features a high-tech planetarium, public telescopes & city views.' link='https://www.google.com/url?sa=i&url=https%3A%2F%2Fgriffithobservatory.org%2F&psig=AOvVaw3D4jV_9L8UrsURPCJMZrZn&ust=1727226712679000&source=images&cd=vfe&opi=89978449&ved=0CAQQ_BdqFwoTCMjO0oPN2ogDFQAAAAAdAAAAABAT' image={GriffithObservatory} alt="Griffith Obs" rate="4.7⭐"/>
                        <Event color='white' title="Universal Studios Hollywood" description='Sprawling amusement park with a cinema theme, featuring rides, restaurants, shops & shows.' link='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.universalstudioshollywood.com%2F%3Futm_source%3Dgoogle%26utm_medium%3Dorganic%26utm_campaign%3DGMB&psig=AOvVaw3D4jV_9L8UrsURPCJMZrZn&ust=1727226712679000&source=images&cd=vfe&opi=89978449&ved=0CAQQ_BdqFwoTCMjO0oPN2ogDFQAAAAAdAAAAABAg' image={Universal} alt="Universal" rate="4.6⭐"/>
                        <Event color='white' title="Santa Monica Pier" description='Storied seaside destination showcasing a range of shops & cafes, plus an amusement park & aquarium.' link='https://www.google.com/url?sa=i&url=https%3A%2F%2Fsantamonicapier.org%2F&psig=AOvVaw3D4jV_9L8UrsURPCJMZrZn&ust=1727226712679000&source=images&cd=vfe&opi=89978449&ved=0CAQQ_BdqFwoTCMjO0oPN2ogDFQAAAAAdAAAAABA3' image={SantaMonica} alt="SMP" rate="4.6⭐"/>
                    </tr>
                    <tr>
                        <Event color='white' title="Dodger Stadium" description="This classic ballpark, one of baseball's oldest, has hosted the Los Angeles Dodgers since 1962." link='https://www.google.com/url?sa=i&url=http%3A%2F%2Flosangeles.dodgers.mlb.com%2Fla%2Fballpark%2Findex.jsp&psig=AOvVaw3D4jV_9L8UrsURPCJMZrZn&ust=1727226712679000&source=images&cd=vfe&opi=89978449&ved=0CAQQ_BdqGAoTCMjO0oPN2ogDFQAAAAAdAAAAABCLAQ' image={DodgerStadium} alt="LADS" rate="4.7⭐"/>
                        <Event color='white' title="Petersen Automotive Museum" description='A vast collection of autos including restored antiques, race cars & vehicles from famous movies.' link='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpetersen.org%2F&psig=AOvVaw3D4jV_9L8UrsURPCJMZrZn&ust=1727226712679000&source=images&cd=vfe&opi=89978449&ved=0CAQQ_BdqGAoTCMjO0oPN2ogDFQAAAAAdAAAAABCXAQ' image={Petersen} alt="PAM" rate="4.7⭐"/>
                        <Event color='white' title="LACMA" description='This 20-acre campus with diverse collections spanning art history also offers screenings & concerts.' link='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lacma.org%2F&psig=AOvVaw3D4jV_9L8UrsURPCJMZrZn&ust=1727226712679000&source=images&cd=vfe&opi=89978449&ved=0CAQQ_BdqGAoTCMjO0oPN2ogDFQAAAAAdAAAAABC9AQ' image={Lacma} alt="LACMA" rate="4.6⭐"/>
                        <Event color='white' title="California Science Center" description="Admission's free to permanent exhibits at this kid-friendly spot, also boasting IMAX & the Endeavor." link='https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.californiasciencecenter.org%2F&psig=AOvVaw3D4jV_9L8UrsURPCJMZrZn&ust=1727226712679000&source=images&cd=vfe&opi=89978449&ved=0CAQQ_BdqFwoTCMjO0oPN2ogDFQAAAAAdAAAAABBy' image={CSC} alt="CSC" rate="4.7⭐"/>
                        <Event color='white' title="Hollywood Bowl" description='Concertgoers bring a picnic & wine to watch shows of every genre at this historic amphitheater.' link='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hollywoodbowl.com%2F&psig=AOvVaw3D4jV_9L8UrsURPCJMZrZn&ust=1727226712679000&source=images&cd=vfe&opi=89978449&ved=0CAQQ_BdqGAoTCMjO0oPN2ogDFQAAAAAdAAAAABDHAQ' image={HollywoodBowl} alt="HB" rate="4.7⭐"/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;