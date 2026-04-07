export function Education() {
    return (

        <div className="rounded-xl border-l-2 px-6 backdrop-blur-sm">
            {/* <h3 className="text-lg font-semibold text-foreground">
                Education
            </h3> */}

            <div className=" space-y-6">
                <div>
                    <p className="font-medium text-foreground">
                        Arizona State University
                    </p>
                    <p className="text-sm text-muted-foreground">
                        M.S. in Computer Science
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                        Jul 2024 — Jan 2026
                    </p>
                </div>

                <div>
                    <p className="font-medium text-foreground">
                        National Taipei University of Education
                    </p>
                    <p className="text-sm text-muted-foreground">
                        B.S. in Mathematics and Information Education
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                        2011 — 2015
                    </p>
                </div>
            </div>

        </div>
    )
}