import React from "react";
import "./blog.css";
class Blog extends React.Component {
  render() {
    return (
      <>
        <div className="container blog-section mt-4">
          <div className="section-title">
            <span>Blog</span>
            <h2>Latest News From Our Blog</h2>
            <p>
              At Wisdom Policy, we ensure a smooth online insurance journey by
              understanding your insurance needs.
            </p>
          </div>
          <div className="card-deck plan-section">
            <div className="card categories ">
              
                <div class="card-body pt-3 pl-4">
                  {/* <h4 class="card-title">Know Types of Health Insurance and there Benefits in India</h4> */}
                  <h5 class="card-title">
                    Know Types of Health Insurance and there Benefits in India{" "}
                  </h5>
                  <p class="card-text">
                    <strong>The Individual Health Insurance Plan: </strong>The
                    Individual Health Insurance Plan in India is a type of
                    health insurance that covers individuals against medical
                    expenses. Although, a person always has an option to add a
                    spouse, children, and/or parents into the individual health
                    insurance policy by paying a little bigger premium amount.
                  </p>
                  <a class="read-more" href="/insurance-details">
                    Read More
                  </a>
                </div>
              </div>
            
              <div class="card categories">
                <div class="card-body">
                  {/* <h4 class="card-title"></h4> */}
                  <h5 class="card-title">
                    Everything You need to know about Car Insurance in India
                  </h5>
                  <p class="card-text">
                    <strong>Third Party Liability Insurance Cover</strong>-
                    Under this car insurance policy, the policy provider offers
                    compensation for specific damage. Buy the third party car
                    insurance and safeguard yourself from the expense incurred
                    due to the damage done in the accident.
                  </p>
                  <a class="read-more" href="/insurance-details">
                    Read More
                  </a>
              </div>
            </div>
          
            <div className="card categories">
              
                <div class="card-body">
                  {/* <h5 class="card-title">Title</h5> */}
                  <h5 class="card-title">
                    Know the Types of Life Insurance in India
                  </h5>
                  <p class="card-text">
                    <strong>Term Life Insurance: </strong>
                    The term life insurance policy is convenient and easy to
                    afford life insurance plan that the maximum number of
                    insurer buyers can consider. This type of life insurance
                    covers the death risk for a particular tenure. If the
                    policyholder dies in the given period then the insurance
                    provider transfers the entire insured amount to the nominee
                    of the policyholder.
                  </p>
                  <a class="read-more" href="/insurance-details">
                    Read More
                  </a>
                
              </div>
            </div>
           
              <div class="card categories">
                <div class="card-body">
                  {/* <h5 class="card-title">Card title</h5> */}
                  <h5 class="card-title">
                    Benefits of Travel Insurance you must know
                  </h5>
                  <p class="card-text">
                    Buying travel insurance looks like paying extra but having
                    financial security is always a good option. Travel insurance
                    covers like Medical Expense, Accident, Loss of Passport,
                    Loss of Checked-In Luggage, Theft/Loss of Personal
                    Belonging, and Trip Cancellation.
                  </p>
                  <a class="read-more" href="/insurance-details">
                    Read More
                  </a>
                </div>
              </div>
            
          </div>
        </div>
        
      </>
    );
  }
}

export default Blog;
