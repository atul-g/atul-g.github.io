# Linux Kernel Spring Bug Fixing Mentorship 2021
---
I started my LFX mentorship on bug fixing on March of 2021. It was a 3 month
program with work primarily focusing on fixing bugs in the Kernel. The purpose
of this blog is to share my experiences and work during this period of
mentorsip.

## The Application Process
The application process for the program consisted of a set of tasks to be
completed by applicants. The challenges were mainly focused on the various
subsystems of the kernel and the final selection of candidates was based on
their work on these tasks. The kernel docs were the perfect place for a rich
source of information for anything related to the kernel and helped a lot
during the application phase.

## The Mentorship phase
Initial tasks were learning about the various bug fixing paradigms:  
 - How to read stack traces for kernel OOPS/panic.
 - Using debugging tools like `gdb`, `objdump`, `nm`.
 - Running a kernel with `CONFIG_KASAN` enabled.
 - Using the script `decode_stacktrace.sh` for an easier to read call trace.
 - Learning about Fuzzing and installing and running the syzkaller kernel
   fuzzer to catch any bugs.
 - Using **sparse** for static analysis and also playing around with kselftest.

The second phase started with the actual bug fixing work. I kept looking for
interesting bugs to investigate. I would often ping my mentor regarding any
doubts I stumble upon and would also get help from my friend, a fellow mentee,
about various topics I encounter in the kernel. Bugs exist over all sub-systems
of the kernel, so reading the docs for a basic understanding of the function
APIs of that sub-system was necessary when researching on any bug.

Around late April, there was an incident involving a university where few
students and teachers indulged in malicious research and deliberately submitted
several buggy patches. The community found out about this and all the commits
from the university were reverted. After this, all the reverted patches had to
be reviewed and proper fixes needed to be submitted. Our mentor asked us (the
mentees) to help in this process and I reviewed 2 and wrote patches for 3 other
reverts.

Investigating bugs helped me delve into several areas of the kernel. I started
learning about **ebpf** and wrote few programs using **BCC** to trace the
return values of a core kernel function while reproducing a bug. There was a
small period when there were occurences of several RCU related bugs.  As I had
no prior knowledge of this, I got help from a friend and read through several
articles series in [LWN](https://lwn.net/) in order to learn about RCU so that I could understand
the bugs.

## Important Tools
The important tools that I used for my work, apart from the debugging tools
mentioned before:
1. **Virtme** - A very important [tool](https://github.com/amluto/virtme) that
   acts as a wrapper around qemu to allow running new kernel builds without any
   of the installation process.

2. **cscope** - to easily spot the definitions of functions.

3. **Elixir Bootlin** - a
   [website](https://elixir.bootlin.com/linux/v5.13-rc3/source) which allowed
   browsing the source code in browser.  I found this invaluable when I just
   wanted to follow certain call trace which would go as deep as 10 functions.

4. **git** - goes without saying just how necessary it is in kernel
   development.  Certain commands like `git blame` (with extra specific
   parameters), `git worktree`, `git send-email` make life a lot easier. My
   workflow heavily depended on creating branches for every bug I investigate
   as each bug is reported first on a certain commit by syzbot, so the call
   trace would be more accurate to read if we used the same commit.

5. **Pen and paper** - an under-rated tool. While going through a stack trace,
   you end up reading code which spans over several files, I would always write
   down the important variable names/function and it's arguments to draw a map
   and see how they were related.

## Acknowledgements
I would like to thanks my mentors **Greg KH** and **Shuah Khan** for all their
help and guidance throughout the mentorship period. Shuah ma'am supported me a
lot throughout my doubts and stumbles. I would also like to thank my friend,
**Kumar Karthikeya Dwivedi** for helping me out with a lot of C and Kernel
concepts and also for his recommendations on several tools like Virtme, ebpf.
